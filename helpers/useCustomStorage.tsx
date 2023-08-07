import { useEffect, useRef, useState } from "react"

import { useStorage } from "@plasmohq/storage/hook"

import { buildCSSToInject } from "./buildCSSToInject"
import { DEFAULT_VALUES, type TStyle } from "./constants"
import { updatePageCSS } from "./updatePageCSS"

export const useCustomStorage = () => {
  // Init storage.
  const [storageStyles, setStorageStyles] = useStorage<TStyle>("styles", (v) =>
    v === undefined || null ? DEFAULT_VALUES : v
  )
  const [enabled, setEnabled] = useStorage<boolean>("enabled", (v) =>
    v === undefined || null ? true : v
  )

  // Used for UI and injecting. Storage API is rate limited.
  const [styles, setStyles] = useState<TStyle>(storageStyles)

  // Init style string, for example: `* { line-height: "1" }`
  const { css } = buildCSSToInject(storageStyles, 0)

  // Use it as reference
  const insertedCSSRef = useRef(css)

  // Update styles if anything is saved in Storage
  useEffect(() => {
    setStyles(storageStyles)
    updatePageCSS(insertedCSSRef, storageStyles)
  }, [storageStyles])

  // Listen for shortcut message
  useEffect(() => {
    chrome.runtime.onMessage.addListener((message) => {
      if (message === "toggle") {
        const payload = enabled ? null : storageStyles
        updatePageCSS(insertedCSSRef, payload)
        setEnabled((prev: boolean) => !prev)
      }
    })
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
