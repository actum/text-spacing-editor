import { Storage } from "@plasmohq/storage"

import { buildCSSToInject } from "~helpers/buildCSSToInject"

const storage = new Storage({ area: "local" })

// Listen to custom key strokes
chrome.commands.onCommand.addListener((command) => {
  if (command === "toggle") {
    chrome.runtime.sendMessage("toggle")
  }
})
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
