import React from 'react';
import './Button.css';

import ActionButton from './ActionButton';
import NumberButton from './NumberButton';

const numbers = [7,8,9,4,5,6,1,2,3]
const operators = ['\xF7', 'x', '-', '+', '=']

function ButtonContainer(props) {
  return (
    <div className="keypad">
      <div className="data-input-keys">
        <ActionButton buttonStyle='btn action-btn' text='clear' showButton={props.onDisplayButton} />
        {numbers.map((number) => (
          <NumberButton
            text={number}
            key={number}
            buttonStyle='btn number-btn'
            showButton={props.onDisplayButton}
          />
        ))}
        <ActionButton buttonStyle='btn action-btn' text='0' showButton={props.onDisplayButton} />
      </div>
      <div className="function-keys">
        {operators.map((operator) => (
          <NumberButton
            text={operator}
            key={operator}
            buttonStyle='btn number-btn operator-btn'
            showButton={props.onDisplayButton}
          />
        ))}
      </div>
    </div>
  )
}

export default ButtonContainer;