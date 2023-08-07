import { DEFAULT_VALUES, WSAG_VALUES } from "~helpers/constants"
import { updatePageCSS } from "~helpers/updatePageCSS"

export const Button = ({
  enabled,
  setStorageStyles,
  insertedCSSRef,
  storageStyles,
  setStyles,
  setEnabled,
  setMessage
}) => {
  const handleToggle = () => {
    const payload = enabled ? null : storageStyles
    updatePageCSS(insertedCSSRef, payload)
    setEnabled((prev: boolean) => !prev)
    setMessage(
      `Text spacing properties were ${!enabled ? "enabled" : "disabled"}.`
    )
  }
  const handleWCAG = () => {
    updatePageCSS(insertedCSSRef, WSAG_VALUES)
    setStyles(WSAG_VALUES)
    setStorageStyles(WSAG_VALUES)
    setMessage("Text spacing properties were set to WCAG values.")
  }
  const handleReset = () => {
    updatePageCSS(insertedCSSRef, null)
    setStyles(DEFAULT_VALUES)
    setStorageStyles(DEFAULT_VALUES)
    setMessage("Text spacing properties were reset.")
  }

  return (
    <div className="button-group">
      <button id="toggle" onClick={handleToggle}>
        {enabled ? "Disable" : "Enable"} styles
      </button>
      <button id="wcag" onClick={handleWCAG} disabled={!enabled}>
        Set WCAG values
      </button>
      <button id="reset" onClick={handleReset} disabled={!enabled}>
        Reset values
      </button>
    </div>
  )
}
