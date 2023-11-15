/**
 * Retrieves an internationalized message from the Chrome extension's messages.json file.
 *
 * @param key - The key identifying the message in the messages.json file.
 * @param placeholders - An optional array of placeholder values to be inserted into the message.
 * @returns The internationalized message.
 */
const t = (key: string, placeholders: string[] = null) => chrome.i18n.getMessage(key, placeholders)

export default t
