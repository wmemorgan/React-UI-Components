import React, {Component } from 'react';
import './Button.css';

class NumberButton extends Component {
  constructor(props) {
    super(props)
    this.displayNumberButton = this.displayNumberButton.bind(this)
  }

  displayNumberButton(e) {
    console.log(e.currentTarget.textContent)
    this.props.onClick(e.currentTarget.textContent)
  }

  render () {
    const { text, buttonStyle, triggerFunc } = this.props
    return (
      <button className={buttonStyle} onClick={triggerFunc}>
        {text}
      </button>
    )
  }
}

export default NumberButton;