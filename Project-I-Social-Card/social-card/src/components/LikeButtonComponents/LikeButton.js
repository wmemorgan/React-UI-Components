import React, { Component } from 'react';
import './LikeButton.css'


class LikeButton extends Component {
  constructor() {
    super()
    this.totalLikes = 0
    this.incrementCounter = this.incrementCounter.bind(this)
  }

  incrementCounter() {
    console.log('clicked!!')
    this.totalLikes++
    console.log(`totalLikes: ${this.totalLikes}`)
  }

  render () {
    return (
      <div className="likes-wrapper">
        <i className="far fa-heart" onClick={this.incrementCounter}></i>
        <div className="likes">{this.totalLikes}</div>
      </div>
    )
  }
}

export default LikeButton;