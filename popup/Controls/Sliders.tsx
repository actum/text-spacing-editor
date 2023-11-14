import { useState, useRef } from "react";
import { updatePageCSS } from "~helpers/updatePageCSS"
import {countDecimals, roundToDecimalPlaces} from "~helpers/decimals"
import { DEFAULT_VALUES, WCAG_VALUES } from "~helpers/constants"
import { useLongPress } from "@uidotdev/usehooks";
import t from "~helpers/t";

const Slider = ({
  property,
  label,
  min,
  max,
  step,
  enabled,
  value,
  unitless = false,
  handleChange,
  handleResetValue,
  handleSetValue,
}) => {
  const [timerLongPress, setTimerLongPress] = useState(null);

  // Using ref to correctly read and update state from within setInterval
  const valueRef = useRef(value);
  valueRef.current = value;

  const onLongPressEnd = () => {
    clearInterval(timerLongPress);

    // Correctly propagate new value to the live region
    setTimeout(() => {
      handleSetValue(valueRef.current)
    }, 100)
  }

  const setNewValue = (operation) => {
    // Set the initial WCAG value to handle non-numeric "default" value
    let newValue = WCAG_VALUES[property];

    // Subtract from or add to the value
    if (valueRef.current !== t("valueDefault")) {
      const decimalPlaces = countDecimals(step);

      if (operation === "subtract") {
        const subtractedValue = roundToDecimalPlaces(+valueRef.current - +step, decimalPlaces);
        newValue = subtractedValue < min ? min : subtractedValue;
      } else if (operation === "add") {
        const addedValue = roundToDecimalPlaces(+valueRef.current + +step, decimalPlaces);
        newValue = addedValue > max ? max : addedValue;
      }
    }

    valueRef.current = newValue
    handleChange(property, newValue);
  }

  const longPressEvents = (operation) =>
    useLongPress(() => {
      setTimerLongPress(setInterval(() => {
        const shouldSetNewValue = operation === "subtract"
        ? valueRef.current !== min
        : valueRef.current !== max

        if (!shouldSetNewValue) {
          clearInterval(timerLongPress);
          return
        }

        setNewValue(operation)
      }, 35));
    },
    {
      onCancel: onLongPressEnd,
      onFinish: onLongPressEnd,
    });

  const subtractionLongPressEvents = longPressEvents("subtract");
  const additionLongPressEvents = longPressEvents("add");

  return (
    <div className="sliders">
      <div>
        <label className="slider__label" htmlFor={`id-${property}`}>{label}: </label>
        <span
          className={`slider__value ${enabled ? "" : "dimmed"}`}
          id={`value-${property}`}
        >
          {value}
          {!unitless &&
            (value !== t("valueDefault") && "em")
          }
        </span>
      </div>
      <div className="slider__controls">
        <button
          className="button-slider"
          disabled={!enabled}
          onClick={() => {
            if (valueRef.current !== min) {
              setNewValue("subtract")
            }
          }}
          {...subtractionLongPressEvents}
        >
          <svg className="icon" viewBox="0 0 24 24" ><path d="M19 13H5v-2h14v2z"></path></svg>
          <span className="visually-hidden">{t("decreasePropertyValue", label)}</span>
        </button>

        <input
          type="range"
          min={min}
          max={max}
          step={step}
          className="slider"
          id={`id-${property}`}
          disabled={!enabled}
          value={value}
          onChange={(e) =>
            handleChange(
              property,
              (e.target as HTMLInputElement).value
            )
          }
        />

        <button
          className="button-slider"
          disabled={!enabled}
          onClick={() => {
            if (valueRef.current !== max) {
              setNewValue("add")
            }
          }}
          {...additionLongPressEvents}
        >
          <svg className="icon" viewBox="0 0 24 24"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path></svg>
          <span className="visually-hidden">{t("increasePropertyValue", label)}</span>
        </button>

        <button
          className="button-slider"
          disabled={!enabled}
          onClick={() => {
            handleChange(property, DEFAULT_VALUES[property])
            handleResetValue(property)
          }}
        >
          <svg className="icon" viewBox="0 0 24 24"><path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"></path></svg>
          <span className="visually-hidden">{t("resetPropertyValue", label)}</span>
        </button>
      </div>
    </div>
  )
}

const Sliders = ({
  styles,
  enabled,
  setStyles,
  setStorageStyles,
  insertedCSSRef,
  handleResetValue,
  handleSetValue,
}) => {
  const handleInputChange = async (key, value) => {
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

  const sliders = [
    {
      property: "line-height",
      label: t("lineHeight"),
      min: 0,
      max: 4,
      step: 0.1,
      enabled,
      value: styles["line-height"],
      unitless: true,
    }, {
      property: "letter-spacing",
      label: t("letterSpacing"),
      min: 0,
      max: 1,
      step: 0.01,
      enabled,
      value: styles["letter-spacing"],
    }, {
      property: "word-spacing",
      label: t("wordSpacing"),
      min: 0,
      max: 1,
      step: 0.01,
      enabled,
      value: styles["word-spacing"],
    }, {
      property: "paragraph-spacing",
      label: t("paragraphSpacing"),
      min: 0,
      max: 4,
      step: 0.1,
      enabled,
      value: styles["paragraph-spacing"],
    }
  ]

  return (
    <div className="sliders-group">
      {sliders.map((control) => (
        <Slider
          key={control.property}
          property={control.property}
          label={control.label}
          min={control.min}
          max={control.max}
          step={control.step}
          enabled={control.enabled}
          value={control.value}
          unitless={control.unitless}
          handleChange={handleInputChange}
          handleResetValue={handleResetValue}
          handleSetValue={handleSetValue}
        />
      ))}
    </div>
  )
}

export default Sliders
