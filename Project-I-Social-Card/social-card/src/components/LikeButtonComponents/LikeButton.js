import React, { Component } from 'react';
import './LikeButton.css'

class LikeButton extends Component {
  constructor(props) {
    super(props)
    this.state = { clicks: props.clicks }
  }

  incrementCounter() {
    this.setState(prevState => ({
      clicks: prevState.clicks + 1
    }))
  }

  render () {
    return (
      <div className="likes-wrapper">
        <i className="far fa-heart" onClick={() => this.incrementCounter()}></i>
        <div className="likes">{this.state.clicks === 0 ? '': this.state.clicks}</div>
      </div>
    )
  }
}

export default LikeButton;