const AlertMessage: React.FC<{ message: string }> = ({
  message
}) => {
  return (
    <div>
      <p className="visually-hidden" aria-live="polite" id="message">
        {message}
      </p>
    </div>
  )
}

export default AlertMessage
