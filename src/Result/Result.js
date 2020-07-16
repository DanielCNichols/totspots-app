import React, { useState, useContext } from 'react';
import VenueContext from '../VenuesContext';
import { withRouter } from 'react-router-dom';
import s from './Result.module.css';
import Rating from '../Rating/Rating';
import config from '../config';
import VenuesContext from '../VenuesContext';
import { FaStar, FaDollarSign } from 'react-icons/fa';

//TODO: refactor this into a functional component.
//TODO: Get styles out of the component

const Result = props => {
  let context = useContext(VenueContext);
  let { venue } = props;

  function handleClick(id) {
    props.history.push(`/venues/${id}`);
  }

  // ! Rethink this one...
  function renderTypes() {
    let { types } = venue;
    let formatted = types.map(t =>
      t !== 'establishment' && t !== 'point_of_interest'
        ? t.split('_').join(' ')
        : ''
    );

    //! Make this an li and use that to add bullet points
    return formatted.map((t, idx) => {
      return t.length ? (
        <li
          style={{
            display: 'inline-block',
            textTransform: 'capitalize',
          }}
          key={idx}
        >
          {t}
        </li>
      ) : null;
    });
  }

  return (
    <li
      className={s.result}
      key={venue.id}
      onClick={() => handleClick(venue.id)}
    >
      {venue.photos ? (
        <img
          src={`https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${venue.photos[0].photo_reference}&key=${config.GKEY}
`}
          alt="google"
        />
      ) : null}
      <h4>{venue.name}</h4>
      <div className={s.ratings}>
        <Rating value={venue.rating} iconClass="star" symbol={FaStar} />
      </div>
      <div className={s.priceRating}>
        <Rating
          className="price_span"
          iconClass="dollar"
          value={venue.price_level}
          symbol={FaDollarSign}
        />
      </div>
      <span className={s.address}>{venue.vicinity}</span>
      <ul className={s.types}>{renderTypes()}</ul>
      {/* TODO: Get the top rated comment */}
      <div className={s.featuresList}>
        <ul className={s.features}>
          {venue.tsData.tsAmenities.map(feature => {
            return <li key={feature.id}>{feature.amenity_name}</li>;
          })}
        </ul>
      </div>
      <div className={s.review}>
        {venue.tsData.tsReviews[0] && (
          <p>"{venue.tsData.tsReviews[0].content}"</p>
        )}
      </div>
    </li>
  );
};

export default withRouter(Result);
