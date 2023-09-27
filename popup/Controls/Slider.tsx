import { updatePageCSS } from "~helpers/updatePageCSS"

export const Slider = ({
  styles,
  enabled,
  setStyles,
  setStorageStyles,
  insertedCSSRef
}) => {
  const handleInputChange = async (key, value) => {
    // Build new styles
    const newStyles = {
      ...styles,
      [key]: value
    }
    // Remove previous styles and inject new one
    updatePageCSS(insertedCSSRef, newStyles)

    // Render new values
    setStyles(newStyles)

    // Debounced call to store values to browser's storage
    setStorageStyles(newStyles)
  }
  return (
    <div className="controls-group">
      <div className="controls">
        <label htmlFor="input-line-height">Line height</label>
        <input
          type="range"
          min="0"
          max="4"
          step="0.1"
          className="slider"
          id="input-line-height"
          disabled={!enabled}
          value={styles["line-height"]}
          onChange={(e) =>
            handleInputChange(
              "line-height",
              (e.target as HTMLInputElement).value
            )
          }
        />
        <span id="value-line-height">{styles["line-height"]}</span>
      </div>
      <div className="controls">
        <label htmlFor="input-letter-spacing">Letter spacing</label>
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          className="slider"
          id="input-letter-spacing"
          disabled={!enabled}
          value={styles["letter-spacing"]}
          onChange={(e) =>
            handleInputChange(
              "letter-spacing",
              (e.target as HTMLInputElement).value
            )
          }
        />
        <span id="value-letter-spacing">
          {styles["letter-spacing"]}
          {styles["letter-spacing"] !== "unset" && "em"}
        </span>
      </div>
      <div className="controls">
        <label htmlFor="input-word-spacing">Word spacing</label>
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          className="slider"
          id="input-word-spacing"
          disabled={!enabled}
          value={styles["word-spacing"]}
          onChange={(e) =>
            handleInputChange(
              "word-spacing",
              (e.target as HTMLInputElement).value
            )
          }
        />
        <span id="value-word-spacing">
          {styles["word-spacing"]}
          {styles["word-spacing"] !== "unset" && "em"}
        </span>
      </div>
      <div className="controls">
        <label htmlFor="input-paragraph-spacing">Paragraph spacing</label>
        <input
          type="range"
          min="0"
          max="4"
          step="0.1"
          className="slider"
          id="input-paragraph-spacing"
          disabled={!enabled}
          value={styles["paragraph-spacing"]}
          onChange={(e) =>
            handleInputChange(
              "paragraph-spacing",
              (e.target as HTMLInputElement).value
            )
          }
        />
        <span id="value-paragraph-spacing">
          {styles["paragraph-spacing"]}
          {styles["paragraph-spacing"] !== "unset" && "em"}
        </span>
      </div>
    </div>
  )
}
