import { buildCSSToInject } from "./buildCSSToInject"

export const updatePageCSS = async (cssRef, newStyles, key = "") => {
  chrome.tabs.query({ active: true, currentWindow: true }, async (tabs) => {
    if (cssRef.current) {
      const payload = buildCSSToInject(cssRef.current, tabs[0].id)
      chrome.scripting.removeCSS(payload)
    }

    if (newStyles) {
      const payload = buildCSSToInject(newStyles, tabs[0].id)
      // Remove previously injected styles
      chrome.scripting.removeCSS(payload)
      // Inject styles into page
      key !== "unmount" && chrome.scripting.insertCSS(payload)

      cssRef.current = payload.css
    }
  })
}
