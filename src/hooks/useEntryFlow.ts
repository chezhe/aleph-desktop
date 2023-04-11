import * as PubSub from 'pubsub-js'
import _ from 'lodash'
import { useEffect, useState } from 'react'
import { FeedEntry, PubEvent } from '@/types'
import { markAllRead, updateEntries } from '@/lib/db'
import { Observable } from '@/lib/obserable'

const entriesStore = new Observable<FeedEntry[]>([])

export default function useEntryFlow() {
  const [entries, setEntries] = useState<FeedEntry[]>(entriesStore.get())

  const onReadAll = () => {
    entriesStore.set(
      entries.map((t) => {
        return { ...t, read: true }
      })
    )
    markAllRead()
  }

  const onUpdateEntries = (_entries: FeedEntry[]) => {
    entriesStore.set(
      entries.map((e) => {
        const entry = _entries.find((t) => t.id === e.id)
        if (entry) {
          return entry
        }
        return e
      })
    )
    updateEntries(_entries)
  }

  useEffect(() => {
    return entriesStore.subscribe(setEntries)
  }, [])

  useEffect(() => {
    const listener = PubSub.subscribe(
      PubEvent.ENTRYFLOW_UPDATE,
      (_, rows: FeedEntry[]) => {
        entriesStore.set(rows)
      }
    )

    return () => {
      listener && PubSub.unsubscribe(listener)
    }
  }, [])

  return {
    entries,
    onReadAll,
    onUpdateEntries,
  }
}
