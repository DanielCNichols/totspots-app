import React from 'react';
import s from './InfoCard.module.css';
import {
  MdPhone,
  MdLocationOn,
  MdOpenInNew,
  MdDirections,
} from 'react-icons/md';

const InfoCard = ({ venue }) => {
  return (
    <div className={s.infoCard}>
      <div className={s.infoElement}>
        <MdLocationOn />
        <span>{venue.vicinity}</span>
      </div>
      <div className={s.infoElement}>
        <MdPhone />
        <span>{venue.formatted_phone_number}</span>
      </div>
      <div className={s.infoElement}>
        <MdOpenInNew />
        <a href={venue.website}>Visit Page</a>
      </div>
      <div className={s.infoElement}>
        <MdDirections />
        <a href={venue.url}>Get Directions</a>
      </div>
      <div className={s.openingHours}>
        <ul>
          <span>Business Hours</span>
          {venue.opening_hours.weekday_text.map((text, idx) => {
            return <li key={idx}>{text}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};

export default InfoCard;
