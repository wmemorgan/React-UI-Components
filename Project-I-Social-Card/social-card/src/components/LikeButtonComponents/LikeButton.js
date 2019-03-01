import React, { Component } from 'react';
import './LikeButton.css'

class LikeButton extends Component {
  constructor() {
    super()
    this.state = { clicks: 0 }
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