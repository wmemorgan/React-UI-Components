import React from 'react';
import './Button.css';

function NumberButton(props) {
  const { text, buttonStyle } = props
  return (
    <button className={buttonStyle}>
      {text}
    </button>
  )
}

export default NumberButton;