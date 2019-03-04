import React, {Component } from 'react';
import './Button.css';

class ActionButton extends Component {
  constructor(props) {
    super(props)
    this.displayNumberButton = this.displayNumberButton.bind(this)
  }

  displayNumberButton(e) {
    console.log(e.currentTarget.textContent)
    this.props.onNumberButtonDisplay(e.currentTarget.textContent)
  }

  render() {
    const { text, buttonStyle } = this.props

    return (
      <button className={buttonStyle}>
        {text}
      </button>
    )    
  }
}


export default ActionButton;