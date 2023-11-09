const Switch = ({
  enabled,
  handleChange
}) => {
  const handleKeyDown = (e) => {
    // Space is handled by default on checkbox but Enter is not
    if (e.key === "Enter") {
      e.preventDefault();
      handleChange();
    }
  }

  return (
    <label className="switch__label" htmlFor="switch">
      Active
      <input
        className="switch__input visually-hidden"
        type="checkbox"
        id="switch"
        checked={enabled}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
      <div className="switch"></div>
    </label>
  )
}

export default Switch
