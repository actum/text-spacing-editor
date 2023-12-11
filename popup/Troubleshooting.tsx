import t from "~helpers/t"

const Troubleshooting = () => (
  <details>
    <summary className="box">
      {t("troubleshooting")}
    </summary>
    <div className="box">
      <p dangerouslySetInnerHTML={{__html: t("assistance")}} />
      <p dangerouslySetInnerHTML={{__html: t("instructionsForIframe")}} />
      <p dangerouslySetInnerHTML={{__html: t("scriptBlockingInfo")}} />
    </div>
  </details>
)

export default Troubleshooting
