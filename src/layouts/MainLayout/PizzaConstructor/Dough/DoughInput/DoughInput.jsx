import React from 'react';
// import './DoughInput.scss'

const DoughInput = ({title, subtitle, className}) => {
  return (
    <label className={className}>
      <input type="radio" name="dought"  className="visually-hidden"/>
      <b>{title}</b>
      <span>{subtitle}</span>
    </label>
  );
};

export default DoughInput;
