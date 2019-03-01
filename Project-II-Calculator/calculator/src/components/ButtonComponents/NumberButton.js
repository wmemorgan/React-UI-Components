import React from 'react';
import './Button.css';

function NumberButton(props) {
  const { text } = props
  return (
    <div className="btn number-btn">
      {text}
    </div>
  )
}

export default NumberButton;