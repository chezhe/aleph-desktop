import { Store } from 'tauri-plugin-store-api'

const store = new Store('.settings.dat')

export async function setValue(key: string, value: string) {
  await store.set(key, { value })
}

export async function getValue(key: string) {
  return await store.get(key)
}
