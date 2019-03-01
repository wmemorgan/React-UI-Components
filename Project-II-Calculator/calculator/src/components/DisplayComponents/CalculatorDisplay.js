import React from 'react';
import './Display.css';

function CalculatorDisplay (props) {
  const { text } = props
  return (
    <div className="calc-display">
      {text}
    </div>
  )
}

export default CalculatorDisplay;