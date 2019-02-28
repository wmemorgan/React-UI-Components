import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer>
      <nav>
        <i className="far fa-comment"></i>
        <i className="fas fa-sync"></i>
        <i className="far fa-heart"></i>
        <a href="mailto:contact@lambdaschool.com?subject=React Course Registration">
          <i className="far fa-envelope"></i>
        </a>
      </nav>
    </footer>
  )
}

export default Footer;