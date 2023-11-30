import t from "~helpers/t"

const Instructions = () => (
  <details>
    <summary className="box">
      {t("instructionsForUsage")}
    </summary>
    <div className="box">
      <p dangerouslySetInnerHTML={{__html: t("instructionsForActive")}} />
      <p dangerouslySetInnerHTML={{__html: t("instructionsForWCAGButton")}} />
      <p dangerouslySetInnerHTML={{__html: t("instructionsForResetAllButton")}} />
      <p dangerouslySetInnerHTML={{__html: t("instructionsForSliders")}} />
      <p dangerouslySetInnerHTML={{__html: t("instructionsForReset")}} />
      <p dangerouslySetInnerHTML={{__html: t("instructionsForWCAGOne")}} />
      <p dangerouslySetInnerHTML={{__html: t("instructionsForWCAGTwo")}} />
      <div dangerouslySetInnerHTML={{__html: t("instructionsForWCAGConformance")}} />
    </div>
  </details>
)

export default Instructions
