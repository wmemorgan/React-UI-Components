import React, { Fragment } from 'react';
import './Header.css';

function HeaderTitle(props) {
  return (
    <Fragment>
    <div>@LambdaSchool 
      <li>{props.date}</li>
    </div>
    </Fragment>
  );
}

export default HeaderTitle;