const Typography = () => (
  <>
    <h1>Text Spacing Editor</h1>

    <p>
      Set text spacing properties using controls below. Supports iframes (also
      nested) on the{" "}
      <a
        href="https://developer.mozilla.org/en-US/docs/Web/Security/Same-origin_policy"
        target="_blank"
        rel="noopener noreferrer">
        same origin
      </a>
      .
    </p>

    <details>
      <summary className="box">
        Info about WCAG <strong>1.4.12 - Text Spacing - AA</strong>
      </summary>

      <div className="box">
        <p>
          <a
            href="https://www.w3.org/WAI/WCAG21/Understanding/text-spacing.html"
            target="_blank"
            rel="noopener noreferrer">
            WCAG <strong>1.4.12 - Text Spacing - AA</strong>
          </a>{" "}
          - no loss of content or functionality occurs by setting all of these
          properties to the following values:
        </p>
        <ul>
          <li>
            <em>Line height</em> to at least <em>1.5</em> times the font size
          </li>
          <li>
            <em>Letter spacing</em> to at least <em>0.12</em> times the font
            size
          </li>
          <li>
            <em>Word spacing</em> to at least <em>0.16</em> times the font size
          </li>
          <li>
            <em>Spacing following paragraphs</em> to at least <em>2</em> times
            the font size
          </li>
        </ul>
      </div>
    </details>

    <p>
      Use the <strong>Enable/disable styles</strong> button to enable or disable
      your custom styles. You can also use <code>Ctrl+Shift+F</code> (
      <code>Command+Shift+F</code> on Mac) for this. Feel free to set your custom key shortcut in the extension settings of your browser.
    </p>
    <p>
      Use the <strong>Set WCAG values</strong> button to set all of the
      properties to the WCAG conformance values.
    </p>
    <p>
      Use the <strong>Reset values</strong> button to reset all the styles to
      their previous values.
    </p>
  </>
)

export const Main = ({ children }) => {
  return (
    <>
      <main>
        <Typography />

        {children}
      </main>
    </>
  )
}
