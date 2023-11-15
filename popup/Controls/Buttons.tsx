import t from "~helpers/t"

const Buttons = ({
  enabled,
  handleSetWCAG,
  handleResetAllValues,
}) => (
  <div className="button-group">
    <button id="wcag" onClick={handleSetWCAG} disabled={!enabled}>
      {t("buttonSetWCAGValues")}
    </button>
    <button id="reset" onClick={handleResetAllValues} disabled={!enabled}>
      {t("buttonResetAllValues")}
    </button>
  </div>
)

export default Buttons
