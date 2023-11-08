import type { TStyle } from "./constants"

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
    // Default values are used for UI only!!
    // If you inject `default` value to DOM, you break initial styling
    if (value === "default") break

    // Parse style object and format CSS properties
    if (key === "paragraph-spacing") {
      paragraphStyles += `margin-bottom: ${value}em !important;`
    } else if (key !== "line-height") {
      globalStyles += `${key}: ${value}em !important;`
    } else {
      globalStyles += `${key}: ${value} !important;`
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
