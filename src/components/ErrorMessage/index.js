import React from 'react';

const ErrorMessage = ({ error }) => (
  <div className="error-message">
    <small>{error.toString()}</small>
  </div>
);

export default ErrorMessage;
