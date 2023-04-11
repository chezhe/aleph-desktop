import { updateEntries } from '@/lib/db'
import { useEffect, useState } from 'react'
import { FeedEntry } from '@/types'
import useBookmarks from './useBookmarks'
import useEntryFlow from './useEntryFlow'

export default function useEntry(id?: string) {
  const [entry, setEntry] = useState<FeedEntry>()
  const { entries: flowEntries, onUpdateEntries: onUpdateFlowEntries } =
    useEntryFlow()
  const {
    entries: bookmarkedEntries,
    onUpdateEntries: onUpdateBookmarkedEntries,
  } = useBookmarks()

  const onUpdateEntry = (e: FeedEntry) => {
    setEntry(e)
    const _entry = flowEntries.find((t) => t.id === id)
    if (_entry) {
      onUpdateFlowEntries([e])
    } else {
      const _entry = bookmarkedEntries.find((t) => t.id === id)
      if (_entry) {
        onUpdateBookmarkedEntries([e])
      }
    }
  }

  const _onToggleBookmark = (e: FeedEntry) => {
    setEntry(e)
    updateEntries([e])
  }

  useEffect(() => {
    setEntry(undefined)
    if (id) {
      const entry = flowEntries.find((t) => t.id === id)
      if (entry) {
        setEntry(entry)
      } else {
        const entry = bookmarkedEntries.find((t) => t.id === id)
        if (entry) {
          setEntry(entry)
        }
      }
    }
  }, [id, flowEntries, bookmarkedEntries])

  return {
    entry,
    onUpdateEntry,
    onToggleBookmark: _onToggleBookmark,
  }
}
