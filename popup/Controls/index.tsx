import { useState } from "react"

import { useCustomStorage } from "~helpers/useCustomStorage"
import { AccessibilityMessage } from "~popup/AccessibilityMessage"

import { Button } from "./Button"
import { Slider } from "./Slider"

export const Controls = () => {
  const [message, setMessage] = useState<string>()

  const {
    styles,
    enabled,
    storageStyles,
    insertedCSSRef,
    setStyles,
    setEnabled,
    setStorageStyles
  } = useCustomStorage()

  return (
    <>
      <Button
        storageStyles={storageStyles}
        enabled={enabled}
        setStyles={setStyles}
        setEnabled={setEnabled}
        setMessage={setMessage}
        setStorageStyles={setStorageStyles}
        insertedCSSRef={insertedCSSRef}
      />

      <AccessibilityMessage message={message} />

      <Slider
        styles={styles}
        enabled={enabled}
        setStyles={setStyles}
        setStorageStyles={setStorageStyles}
        insertedCSSRef={insertedCSSRef}
      />
    </>
  )
}
