import React from 'react'

const ErrorMessage = ({ error }) => (
  <div data-testid="error">Oh no, an error occured: {error.toString()}</div>
)

export default ErrorMessage
