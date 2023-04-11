import { fetch, ResponseType, getClient, Body } from '@tauri-apps/api/http'

export const post = async (url: string, json: object, headers = {}) => {
  try {
    const response = await fetch(url, {
      method: 'POST',
      body: Body.json(json),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        ...headers,
      },
    })

    const responseJson = await response.data
    console.log('✅POST - ', url, json)
    return responseJson
  } catch (error) {
    console.log('❌POST - ', url, json, error)
    throw error
  }
}

export const fetcher = async (url: string, headers = {}) => {
  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        ...headers,
      },
    })
    console.log('✅GET - ', url)

    return response.data
  } catch (error) {
    console.log('❌GET - ', url)
    throw error
  }
}
