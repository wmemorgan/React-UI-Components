import React from 'react';
import './Button.css';

function NumberButton(props) {
  const { text, buttonStyle } = props

  function displayNumberButton(e) {
    console.log(e.currentTarget.textContent)
  }
  
  return (
    <button className={buttonStyle} onClick={displayNumberButton}>
      {text}
    </button>
  )
}

export default NumberButton;