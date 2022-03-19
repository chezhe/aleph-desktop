import { Store } from 'tauri-plugin-store-api'
import { sendNotification } from '@tauri-apps/api/notification'

const store = new Store(`.profile`)

export async function setValue(key: string, value: string) {
  try {
    await store.set(key, { value })
    await store.save()
  } catch (error: any) {
    sendNotification(error.message)
  }
}

export async function getValue(key: string) {
  try {
    const has = await store.has(key)
    if (has) {
      return await store.get(key)
    }
  } catch (error: any) {
    sendNotification(error.message)
  }
  return null
}
