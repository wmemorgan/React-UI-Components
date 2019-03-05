import React from 'react';
import './Button.css';

function NumberButton(props) {
  const { text, buttonStyle, showButton } = props
  return (
    <button className={buttonStyle} onClick={showButton}>
      {text}
    </button>
  )
}

export default NumberButton;