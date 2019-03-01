import React from 'react';
import moment from 'moment';
import './Header.css';
import HeaderTitle from './HeaderTitle';

const currentDate = moment().format("DD MMM");

function HeaderContent() {
  return (
    <header className="header-content">
      <HeaderTitle date={currentDate} />
      <p>
        Let's learn React by building simple interfaces with components.
        Don't try to overthink it, just keep it simple and have fun.
        Once you feel comfortable using components you are well on your way to
        mastering React!
    </p>
    </header>
  )
}

export default HeaderContent;
