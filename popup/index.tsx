import { useState } from "react"


import { DEFAULT_VALUES, WCAG_VALUES } from "~helpers/constants"
import { useCustomStorage } from "~helpers/useCustomStorage"
import { updatePageCSS } from "~helpers/updatePageCSS"
import highContrastMode from "~helpers/highContrastMode"

import AlertMessage from "./AlertMessage"
import Instructions from "./Instructions"
import Switch from "./Controls/Switch"
import Buttons from "./Controls/Buttons"
import Sliders from "./Controls/Sliders"

import "./style.css"

if (highContrastMode()) {
  document.documentElement.classList.add('high-contrast')
}

const IndexPopup = () => {
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

  const handleToggle = () => {
    const payload = enabled ? null : storageStyles
    updatePageCSS(insertedCSSRef, payload)
    setEnabled((prev: boolean) => !prev)
    setMessage(
      `Custom text spacing properties were ${!enabled ? "activated" : "deactivated"}.`
    )
  }
  const handleSetWCAG = () => {
    updatePageCSS(insertedCSSRef, WCAG_VALUES)
    setStyles(WCAG_VALUES)
    setStorageStyles(WCAG_VALUES)
    setMessage("Custom text spacing properties were set to WCAG values.")
  }

  const handleResetAllValues = () => {
    updatePageCSS(insertedCSSRef, null)
    setStyles(DEFAULT_VALUES)
    setStorageStyles(DEFAULT_VALUES)
    setMessage("Custom text spacing properties were reset to their default values.")
  }

  const handleResetValue = (property) => {
    setMessage(`Custom ${property} was reset to its default value.`)
  }

  const handleSetValue = (value) => {
    setMessage(value)
  }

  return (
    <main>
      <div className="header">
        <h1>Text Spacing Editor</h1>

        <Switch enabled={enabled} handleChange={handleToggle}/>
      </div>

      <Instructions />

      <Buttons
        enabled={enabled}
        handleSetWCAG={handleSetWCAG}
        handleResetAllValues={handleResetAllValues}
      />

      <Sliders
        styles={styles}
        enabled={enabled}
        setStyles={setStyles}
        setStorageStyles={setStorageStyles}
        insertedCSSRef={insertedCSSRef}
        handleResetValue={handleResetValue}
        handleSetValue={handleSetValue}
      />

      <AlertMessage message={message} />
    </main>
  )
}

export default IndexPopup
