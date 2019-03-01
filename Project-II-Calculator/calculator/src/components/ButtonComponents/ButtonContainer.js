import React from 'react';
import './Button.css';

import ActionButton from './ActionButton';
import NumberButton from './NumberButton';

function ButtonContainer(props) {
  return (
    <div className="keypad">
      <div className="data-input-keys">
        <ActionButton />
        <NumberButton keys="numbers"/>
        <ActionButton />
      </div>
      <div className="function-keys">
        <NumberButton keys="operators" />
      </div>
    </div>
  )
}

export default ButtonContainer;