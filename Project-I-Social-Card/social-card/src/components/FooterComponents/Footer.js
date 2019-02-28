import React, { Component } from 'react';
import './Footer.css';
import LikeButton from '../LikeButtonComponents/LikeButton';
import RefreshButton from '../RefreshButtonComponents/RefreshButton';

class Footer extends Component {
  constructor() {
    super()
    this.state = {
      likeClicks : 0,
      refreshClicks: 0
    }
  }

  render () {
    return (
      <footer>
        <nav>
          <i className="far fa-comment"></i>
          <RefreshButton clicks={this.state.refreshClicks}/>
          <LikeButton clicks={this.state.likeClicks}/>
          <a href="mailto:contact@lambdaschool.com?subject=React Course Registration">
            <i className="far fa-envelope"></i>
          </a>
        </nav>
      </footer>
    )
  }
}

export default Footer;