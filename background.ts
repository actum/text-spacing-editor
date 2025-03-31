import { Storage } from "@plasmohq/storage"

import { buildCSSToInject } from "~helpers/buildCSSToInject"

const storage = new Storage({ area: "local" })

// Listen to custom key strokes
chrome.commands.onCommand.addListener((command) => {
  if (command === "toggle") {
    chrome.runtime.sendMessage("toggle")
  }
})

// Listen to tab updates e.g. navigation within tab
chrome.tabs.onUpdated.addListener(async (tabId, changeInfo) => {
  const enabled = await storage.get("enabled")
  const payload = await storage.get("styles")
  const css = buildCSSToInject(payload, tabId)

  if (!enabled) {
    chrome.scripting.removeCSS(css)
  }
  if (changeInfo.status === "complete" && enabled) {
    chrome.scripting.insertCSS(css)
  }
})

// Listen to tab clicks
chrome.tabs.onActivated.addListener(async (activeInfo) => {
  const enabled = await storage.get("enabled")
  const payload = await storage.get("styles")

  const css = buildCSSToInject(payload, activeInfo.tabId)

  if (!enabled) {
    chrome.scripting.removeCSS(css)
  }
  if (enabled) {
    chrome.scripting.insertCSS(css)
  }
})

// Listen to window focus change
chrome.windows.onFocusChanged.addListener(async (windowId) => {
  await chrome.tabs.query(
    { active: true, windowId: windowId },
    async (tabs) => {
      if (tabs.length > 0) {
        const enabled = await storage.get("enabled")
        const payload = await storage.get("styles")
        const css = buildCSSToInject(payload, tabs[0].id)

        if (!enabled) {
          chrome.scripting.removeCSS(css)
        }
        if (enabled) {
          chrome.scripting.insertCSS(css)
        }
      }
    }
  )
})

// Insert CSS when a new tab is created
chrome.tabs.onCreated.addListener(async (tab) => {
  if (tab.id) {
    const enabled = await storage.get("enabled")
    const payload = await storage.get("styles")
    const css = buildCSSToInject(payload, tab.id)

    if (!enabled) {
      chrome.scripting.removeCSS(css)
    }
    if (enabled) {
      chrome.scripting.insertCSS(css)
    }
  }
})
