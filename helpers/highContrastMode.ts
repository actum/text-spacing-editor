// A cross-browser check for high contrast mode detection
// https://stackoverflow.com/questions/55241841/high-contrast-mode-on-mozilla-browser

const highContrastMode = (): boolean => {
  const testColor = 'rgb(200, 100, 50)'
  const testDiv = document.createElement('div')

  testDiv.style.color = testColor
  document.body.appendChild(testDiv)

  // If the element's color after appending is different than it was set, the high contrast mode is active
  const currentColor = document.defaultView.getComputedStyle(testDiv, null).color
  document.body.removeChild(testDiv)
  return currentColor !== testColor
}

export default highContrastMode
