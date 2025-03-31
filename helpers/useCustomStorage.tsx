import { useEffect, useRef, useState } from "react"

import { Storage } from "@plasmohq/storage"
import { useStorage } from "@plasmohq/storage/hook"

import { buildCSSToInject } from "./buildCSSToInject"
import { DEFAULT_VALUES, type TStyle } from "./constants"
import { updatePageCSS } from "./updatePageCSS"

export const useCustomStorage = () => {
  // Init storage.
  const [storageStyles, setStorageStyles] = useStorage<TStyle>(
    {
      key: "styles",
      instance: new Storage({
        area: "local"
      })
    },
    (v) => (v === undefined || null ? DEFAULT_VALUES : v)
  )
  const [enabled, setEnabled] = useStorage<boolean>(
    {
      key: "enabled",
      instance: new Storage({
        area: "local"
      })
    },
    (v) => (v === undefined || null ? true : v)
  )

  // Used for UI and injecting.
  // Storage API is rate limited.
  const [styles, setStyles] = useState<TStyle>(storageStyles)

  // Init style string, for example: `* { line-height: "1" }`
  const { css } = buildCSSToInject(storageStyles, 0)

  // Use it as reference
  const insertedCSSRef = useRef(css)

  // Update styles if anything is saved in Storage
  useEffect(() => {
    setStyles(storageStyles)
    enabled && updatePageCSS(insertedCSSRef, storageStyles)

    return () => {
      updatePageCSS(insertedCSSRef, storageStyles, "unmount")
    }
  }, [storageStyles, enabled])

  // Listen for shortcut message
  const callback = (message) => {
    if (message === "toggle") {
      const payload = enabled ? null : storageStyles
      updatePageCSS(insertedCSSRef, payload)
      setEnabled((prev: boolean) => !prev)
    }
  }

  useEffect(() => {
    chrome.runtime.onMessage.addListener(callback)

    return () => chrome.runtime.onMessage.removeListener(callback)
  }, [enabled])

  return {
    styles,
    enabled,
    storageStyles,
    insertedCSSRef,
    setStyles,
    setEnabled,
    setStorageStyles
  }
}
