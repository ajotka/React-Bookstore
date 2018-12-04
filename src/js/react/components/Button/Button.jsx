import React from 'react';
import './style.scss';

const Button = ({ onClickHandler, text }) => (
    <button type="button" onClick={onClickHandler}>{text}</button>
);

export default Button;
