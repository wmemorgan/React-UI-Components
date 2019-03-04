import React, { Component } from 'react';
import './Button.css';

import ActionButton from './ActionButton';
import NumberButton from './NumberButton';

const numbers = [7,8,9,4,5,6,1,2,3]
const operators = ['\xF7', 'x', '\u2212', '+', '=']

class ButtonContainer extends Component {
  constructor(props) {
    super(props)
    this.state = { something: '' }
    console.log(this.state.something)
    this.showKey = this.showKey.bind(this)
  }
  
  showKey(e) {
    console.log(e.currentTarget.textContent)
  }

  render() {
    return (
      <div className="keypad">
        <div className="data-input-keys">
          <ActionButton buttonStyle='btn action-btn' text='clear' triggerFunc={this.showKey} />
          {numbers.map((number) => (
            <NumberButton
              text={number}
              key={number}
              buttonStyle='btn number-btn'
              triggerFunc={this.showKey}
            />
          ))}
          <ActionButton buttonStyle='btn action-btn' text='0' triggerFunc={this.showKey} />
        </div>
        <div className="function-keys">
          {operators.map((operator) => (
            <NumberButton
              text={operator}
              key={operator}
              buttonStyle='btn number-btn operator-btn'
              triggerFunc={this.showKey}
            />
          ))}
        </div>
      </div>
    )
  }
}

export default ButtonContainer;