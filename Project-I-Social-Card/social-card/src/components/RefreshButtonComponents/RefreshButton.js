import React, { Component } from 'react';
import './RefreshButton.css';
import '../LikeButtonComponents/LikeButton.css'

//import LikeButton from '../LikeButtonComponents/LikeButton';

class RefreshButton extends Component {
  constructor(props) {
    super(props)
    this.state = { 
      likeClicks: 0,
      refreshClicks: 0 
    }
  }

  incrementLikes () {
    this.setState(prevState => ({
      likeClicks: prevState.likeClicks + 1,
      refreshClicks: prevState.refreshClicks
    }))
  }

  refreshLikes () {
    this.setState(prevState => ({
      likeClicks: 0, 
      refreshClicks: prevState.refreshClicks + 1 
    }))
  }

  render() {
    return (
      <>
        <div className="refresh-wrapper">
          <i className="fas fa-sync" onClick={() => this.refreshLikes()}></i>
          <div className="refresh-count">{this.state.refreshClicks === 0 ? '' : this.state.refreshClicks}</div>
        </div>
        <div className="likes-wrapper">
          <i className="far fa-heart" onClick={() => this.incrementLikes()}></i>
          <div className="likes">{this.state.likeClicks === 0 ? '' : this.state.likeClicks}</div>
        </div>
      </>
    )
  }
}

export default RefreshButton;