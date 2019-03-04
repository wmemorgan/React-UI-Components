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
    const { text, buttonStyle, showButton } = this.props
    return (
      <button className={buttonStyle} onClick={showButton}>
        {text}
      </button>
    )
  }
}

export default NumberButton;