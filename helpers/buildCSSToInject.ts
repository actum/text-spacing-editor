import type { TStyle } from "./constants"
import t from "./t"

export const buildCSSToInject = (css: TStyle | string, tabId: number) => {
  let globalStyles = ""
  let paragraphStyles = ""

  if (typeof css === "string") {
    return {
      target: {
        tabId: tabId,
        allFrames: true
      },
      css
    }
  }

  for (const [key, value] of Object.entries(css)) {
    // Parse style object and format CSS properties
    if (key === "paragraph-spacing") {
      paragraphStyles += `margin-bottom: ${value}em !important;`
    } else if (key !== "line-height") {
      globalStyles += `${key}: ${
        value !== t("valueDefault") ? `${value}em !important;` : `${value};`
      }`
    } else {
      globalStyles += `${key}: ${
        value !== t("valueDefault") ? `${value} !important;` : `${value};`
      }`
    }
  }

  const payload = {
    target: {
      tabId: tabId,
      allFrames: true
    },
    css: `* { ${globalStyles} } p { ${paragraphStyles} }`
  }

  return payload
}
