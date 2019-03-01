import React from 'react';
import './Button.css';

import ActionButton from './ActionButton';
import NumberButton from './NumberButton';

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const operators = ['\xF7', 'x', '\u2212', '+', '=']

function ButtonContainer() {
  return (
    <div className="keypad">
      <div className="data-input-keys">
        <ActionButton text='clear'/>
        {numbers.map((number) => (
          <NumberButton text={number} key={number} />
        ))}
        <ActionButton text='0'/>
      </div>
      <div className="function-keys">
        {operators.map((operator) => (
          <NumberButton text={operator} key={operator} />
        ))}
      </div>
    </div>
  )
}

export default ButtonContainer;