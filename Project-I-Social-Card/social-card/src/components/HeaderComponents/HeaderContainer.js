import React, { Fragment } from 'react';
import moment from 'moment';
import './Header.css';

import ImageThumbnail from './ImageThumbnail';
import HeaderTitle from './HeaderTitle';
import HeaderContent from './HeaderContent';

const currentDate = moment().format("DD MMM")

function HeaderContainer() {
  return (
    <Fragment>
      <ImageThumbnail />
      <HeaderTitle date={currentDate}/>
      <HeaderContent />
    </Fragment>
  );
}

export default HeaderContainer;