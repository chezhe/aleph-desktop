import { Store } from 'tauri-plugin-store-api'

const store = new Store('.settings.dat')
store.load()
export async function setValue(key: string, value: string) {
  await store.set(key, { value })
  await store.save()
}

export async function getValue(key: string) {
  try {
    const has = await store.has(key)
    console.log(`###has ${key}`, has)
    if (has) {
      return await store.get(key)
    }
  } catch (error) {}
  return null
}
