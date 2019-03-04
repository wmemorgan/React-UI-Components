import React from 'react';
import './Display.css';

function CalculatorDisplay (props) {
  const { text, elemStyle } = props
  return (
    <div className={elemStyle}>
      {text === 'clear'? 0 : text}
    </div>
  )
}

export default CalculatorDisplay;