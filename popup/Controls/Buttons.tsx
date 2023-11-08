const Buttons = ({
  enabled,
  handleSetWCAG,
  handleResetAllValues,
}) => (
  <div className="button-group">
    <button id="wcag" onClick={handleSetWCAG} disabled={!enabled}>
      Set WCAG values
    </button>
    <button id="reset" onClick={handleResetAllValues} disabled={!enabled}>
      Reset all values
    </button>
  </div>
)

export default Buttons
