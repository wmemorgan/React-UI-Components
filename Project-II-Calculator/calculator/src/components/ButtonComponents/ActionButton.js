import React from 'react';
import './Button.css';

function ActionButton(props) {
  const { text } = props
  return (
    <div className="btn action-btn">
    {text}
    </div>
  )
}


export default ActionButton;