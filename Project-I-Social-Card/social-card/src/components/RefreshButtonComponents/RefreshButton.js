import React, { Component } from 'react';
import './RefreshButton.css';

class RefreshButton extends Component {
  constructor(props) {
    super(props)
    this.state = { clicks: props.clicks }
  }

  incrementCounter () {
    this.setState(prevState => ({ clicks: prevState.clicks + 1 }))
  }

  render() {
    return (
      <div className="refresh-wrapper">
        <i className="fas fa-sync" onClick={() => this.incrementCounter()}></i>
        <div className="refresh-count">{this.state.clicks === 0 ? '' : this.state.clicks}</div>
      </div>
    )
  }
}

export default RefreshButton;