import React from 'react';
import './Display.css';

function CalculatorDisplay (props) {
  const { text, elemStyle } = props
  return (
    <div className={elemStyle}>
      {text}
    </div>
  )
}

export default CalculatorDisplay;