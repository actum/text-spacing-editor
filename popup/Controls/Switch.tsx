const Switch = ({
  enabled,
  handleChange
}) => (
  <label className="switch__label" htmlFor="switch">
    Active
    <input
      className="switch__input visually-hidden"
      type="checkbox"
      id="switch"
      checked={enabled}
      onChange={handleChange}
    />
    <div className="switch"></div>
  </label>
)

export default Switch
