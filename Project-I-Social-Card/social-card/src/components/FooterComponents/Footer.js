import React from 'react';
import './Footer.css';
//import LikeButton from '../LikeButtonComponents/LikeButton';
import RefreshButton from '../RefreshButtonComponents/RefreshButton';

function Footer() {
  return (
    <footer>
      <nav>
        <i className="far fa-comment"></i>
        <RefreshButton />
        {/* <LikeButton /> */}
        <a href="mailto:contact@lambdaschool.com?subject=React Course Registration">
          <i className="far fa-envelope"></i>
        </a>
      </nav>
    </footer>
  )
}

export default Footer;