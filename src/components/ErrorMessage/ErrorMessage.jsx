import React from 'react';

class ErrorMessage extends React.Component {
  render () {
    return (
      <section className="error">
        {(this.props.errorMessage) && (
          <h1 className="error__message medium-font medium-font_size_big">{this.props.errorMessage}</h1>
        )}
      </section>
    )
  }
}

export default ErrorMessage;