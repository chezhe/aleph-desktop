import dayjs from 'dayjs'
import _ from 'lodash'
import { store } from '@/store'
import { Feed, FeedData, FeedEntry } from '@/types'
import { HOST } from './constants'
import { createEntries, updateEntries } from './db'
import { fetcher, post } from './request'

const DAYS_LIMIT = {
  day: 1,
  week: 7,
  month: 30,
  year: 365,
  ever: -1,
}

export async function extract(url: string): Promise<FeedData> {
  return (await fetcher(
    `${HOST}/extract?url=${encodeURIComponent(url)}`
  )) as FeedData
}

export async function fetchFeedFlow(feeds: Feed[]) {
  try {
    const publishLimit = store
      .getState()
      .setting.flow.publishLimit.toLowerCase() as keyof typeof DAYS_LIMIT

    await Promise.all(
      feeds.map(async (feed) => {
        try {
          const result = await extract(feed.url)
          const entries =
            result.entries ||
            [].filter((entry: FeedEntry) => {
              if (publishLimit === 'ever') {
                return true
              }
              return (
                dayjs().diff(dayjs(entry.published), 'day') <=
                DAYS_LIMIT[publishLimit]
              )
            })
          createEntries(entries)
        } catch (error) {
          return null
        }
      })
    )
  } catch (error) {}
}

export async function tagFeedEntries(entries: FeedEntry[]) {
  try {
    const { apiKey, model, role } = store.getState().setting.openAI
    if (!apiKey) {
      return
    }
    const untaggedEntries = entries.filter((entry) => {
      return (
        entry.id.startsWith('http') && (!entry.tags || entry.tags.length === 0)
      )
    })

    if (untaggedEntries.length === 0) {
      return
    }
    const result = await getKeywordsOf(
      untaggedEntries.slice(0, 10).map((t) => t.id),
      {
        apiKey,
        model,
        role,
      }
    )

    const taggedEntries = untaggedEntries.map((entry, idx) => {
      return {
        ...entry,
        tags: result[idx] || [],
      }
    })

    await updateEntries(taggedEntries)
    if (apiKey) {
      await tagFeedEntries(untaggedEntries.slice(10))
    }
  } catch (error) {}
}

export async function getKeywordsOf(
  urls: string[],
  {
    apiKey,
    model,
    role,
  }: {
    apiKey: string
    model: string
    role: string
  }
) {
  if (apiKey) {
    try {
      const response = await post(
        'https://api.openai.com/v1/chat/completions',
        {
          model: apiKey ? model : 'gpt-3.5-turbo',
          messages: [
            {
              role: apiKey ? role : 'user',
              content: `${urls.join(
                ', '
              )} keywords of above articles, each limit to 5 words, give me an string like this [["keywordA","keywordB"],["keywordC","keywordD"]] which can be used with JSON.parse in javascript`,
            },
          ],
          temperature: 0.7,
          top_p: 1,
          frequency_penalty: 0,
          presence_penalty: 0,
          max_tokens: 200,
          stream: false,
          n: 1,
        },
        {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${apiKey}`,
        }
      )

      const content = (response as any).choices[0].message.content

      if (content) {
        return JSON.parse(content.trim().replace(/(\r\n|\n|\r)/gm, ''))
      }
      return []
    } catch (error) {
      return []
    }
  } else {
    return post(`${HOST}/keywords`, {
      entries: urls,
    })
  }
}

export async function getSummaryOf(
  url: string,
  {
    apiKey,
    model,
    role,
  }: {
    apiKey: string
    model: string
    role: string
  }
) {
  if (apiKey) {
    const response = await post(
      'https://api.openai.com/v1/chat/completions',
      {
        model: apiKey ? model : 'gpt-3.5-turbo',
        messages: [
          {
            role: apiKey ? role : 'user',
            content: `summarize ${url}, limit to 120 words`,
          },
        ],
        temperature: 0.7,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
        max_tokens: 200,
        stream: false,
        n: 1,
      },
      {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      }
    )

    const content = (response as any).choices[0].message.content
    return {
      url,
      content,
    }
  } else {
    return post(`${HOST}/summarize`, {
      url,
      apiKey,
      model,
      role,
    })
  }
}
