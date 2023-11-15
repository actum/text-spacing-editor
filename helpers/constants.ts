import t from "./t"

export type TStyle = {
  "line-height": string
  "letter-spacing": string
  "word-spacing": string
  "paragraph-spacing": string
}

export const WCAG_VALUES: TStyle = {
  "line-height": "1.5",
  "letter-spacing": "0.12",
  "word-spacing": "0.16",
  "paragraph-spacing": "2"
}

export const DEFAULT_VALUES: TStyle = {
  "line-height": t("valueDefault"),
  "letter-spacing": t("valueDefault"),
  "word-spacing": t("valueDefault"),
  "paragraph-spacing": t("valueDefault")
}
