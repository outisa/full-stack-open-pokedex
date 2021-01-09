import React from 'react'

const ErrorMessage = ({ error }) => (
  <div data-testid="error">Following error occured: {error.toString()}</div>
)

export default ErrorMessage
