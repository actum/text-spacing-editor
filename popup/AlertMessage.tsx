import type { CSSProperties } from "react"

const style: CSSProperties = {
  position: "absolute",
  border: "0",
  padding: "0",
  width: "1px",
  height: "1px",
  overflow: "hidden",
  clip: "rect(1px, 1px, 1px, 1px)"
}

export const AlertMessage: React.FC<{ message: string }> = ({
  message
}) => {
  return (
    <div>
      <p role="alert" id="message" style={style}>
        {message}
      </p>
    </div>
  )
}
