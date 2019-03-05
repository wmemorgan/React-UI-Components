import React from 'react';
import './Button.css';

function ActionButton(props) {
  const { text, buttonStyle, showButton } = props
  return (
    <button className={buttonStyle} onClick={showButton}>
      {text}
    </button>
  )  
}

export default ActionButton;