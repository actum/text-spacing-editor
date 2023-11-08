const AlertMessage: React.FC<{ message: string }> = ({
  message
}) => {
  return (
    <div>
      <p className="visually-hidden "role="alert" id="message">
        {message}
      </p>
    </div>
  )
}

export default AlertMessage
