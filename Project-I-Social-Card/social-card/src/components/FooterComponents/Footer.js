import React from 'react';
import './Footer.css';
import LikeButton from '../LikeButtonComponents/LikeButton';

function Footer() {
  return (
    <footer>
      <nav>
        <i className="far fa-comment"></i>
        <i className="fas fa-sync"></i>
        <LikeButton />
        <a href="mailto:contact@lambdaschool.com?subject=React Course Registration">
          <i className="far fa-envelope"></i>
        </a>
      </nav>
    </footer>
  )
}

export default Footer;