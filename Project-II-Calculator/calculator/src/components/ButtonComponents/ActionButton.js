import React from 'react';
import './Button.css';

function ActionButton(props) {
  const { text, buttonStyle } = props
  return (
    <button className={buttonStyle}>
    {text}
    </button>
  )
}


export default ActionButton;