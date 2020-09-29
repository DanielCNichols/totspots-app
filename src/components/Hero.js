import React from 'react';
import s from '../sass/components/Hero.module.scss';

export default function Hero(props) {
  console.log('image', props.imgSource.landingImage);

  function setBackground() {
    return `url(${props.imgSource.landingImage}) no-repeat  center`;
  }
  const heroStyle = {
    background: setBackground(),
    backgroundSize: 'cover',
  };
  return (
    <div className={s.hero} style={heroStyle}>
      {props.children}
    </div>
  );
}
