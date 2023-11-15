const Instructions = () => (
  <details>
    <summary className="box">
      How to use Text Spacing Editor?
    </summary>
    <div className="box">
      <p>
        Use the <strong className="hint">Active</strong> switcher at the top to activate or deactivate your custom text spacing properties and all controls. You can also use a key shortcut <code className="hint">Ctrl+Shift+F</code> (<code className="hint">Command+Shift+F</code> on Mac) for this (feel free to set your custom key shortcut in the extension settings of your browser). Being able to toggle custom properties is handy for testing and storing custom settings.
      </p>
      <p>
        Use the <strong className="hint">Set WCAG values</strong> button to set all the custom text spacing properties to the <a href="#wcag-conformance-values">WCAG conformance values</a>.
      </p>
      <p>
        Use the <strong className="hint">Reset all values</strong> button to reset all the text spacing properties to their default values.
      </p>
      <p>
        Use either the <strong className="hint">sliders</strong> or the{" "}
        <strong className="hint">
          <span className="visually-hidden">Decrease</span>
          <svg className="icon icon--inline" viewBox="0 0 24 24" ><path d="M19 13H5v-2h14v2z"></path></svg>
        </strong>
        {" "}and{" "}
        <strong className="hint">
          <span className="visually-hidden">Increase</span>
          <svg className="icon icon--inline" viewBox="0 0 24 24"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path></svg>
        </strong>
        {" "}buttons (that support long-press event) to set the values of the individual text spacing properties.
      </p>
      <p>
        Use the{" "}
        <strong className="hint">
        <span className="visually-hidden">Reset</span>
          <svg className="icon icon--inline" viewBox="0 0 24 24"><path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"></path></svg>
        </strong>
        {" "}button to reset the values of the individual text spacing properties.
      </p>

      <p>
      Text Spacing Editor supports iframes (also nested) on the{" "}
      <a
        href="https://developer.mozilla.org/en-US/docs/Web/Security/Same-origin_policy"
        target="_blank"
        rel="noopener noreferrer">
        same origin
      </a>.</p>

      <p>
        You can use Text Spacing Editor to test <a
          href="https://www.w3.org/WAI/WCAG21/Understanding/text-spacing.html"
          target="_blank"
          rel="noopener noreferrer">
          WCAG criterion <strong>1.4.12 - Text Spacing - AA</strong>
        </a>
        {" "} that says the following:</p>

        <p>No loss of content or functionality occurs by setting all of these properties to the following values:
      </p>
      <ul id="wcag-conformance-values">
        <li>
          <em>Line height</em> to at least <em>1.5</em> times the font size.
        </li>
        <li>
          <em>Letter spacing</em> to at least <em>0.12</em> times the font size.
        </li>
        <li>
          <em>Word spacing</em> to at least <em>0.16</em> times the font size.
        </li>
        <li>
          <em>Spacing following paragraphs</em> to at least <em>2</em> times the font size.
        </li>
      </ul>
    </div>
  </details>
)

export default Instructions
