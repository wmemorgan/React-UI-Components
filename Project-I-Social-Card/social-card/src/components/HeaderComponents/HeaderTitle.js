import React from 'react';
import './Header.css';

function HeaderTitle(props) {
  return (
    <div className="header-title">
      <h1>Lambda School 
      </h1>
      <nav>
        <li><a href="https://twitter.com/LambdaSchool" target="_blank" rel="noopener noreferrer">@LambdaSchool</a></li>
        <li>{props.date}</li>
      </nav>
    </div>
  );
}

export default HeaderTitle;