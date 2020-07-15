import React, { useState, useContext } from 'react';
import VenueContext from '../VenuesContext';
import { withRouter } from 'react-router-dom';
import s from './Result.module.css';
import Rating from '../Rating/Rating';
import config from '../config';

//TODO: refactor this into a functional component.
//TODO: Get styles out of the component

const Result = props => {
  let context = useContext(VenueContext);
  const [expanded, setExpanded] = useState(false);

  function renderTypes() {
    let { types } = props.venue;
    let formatted = types.map(t =>
      t !== 'establishment' && t !== 'point_of_interest'
        ? t.split('_').join(' ')
        : ''
    );
    return formatted.map((t, idx) => {
      return (
        <span
          style={{
            display: 'inline-block',
            textTransform: 'capitalize',
          }}
          key={idx}
        >
          {t}
        </span>
      );
    });
  }

  let { venue } = props;

  return (
    <li
      className={s.result}
      key={venue.id}
      // onClick={() => this.handleExpanded(venue.id)}
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
        <Rating value={venue.rating} symbol="&#x2605;" />
        <Rating
          className="price_span"
          value={venue.price_level}
          symbol="&#36;"
        />
      </div>
      <span className={s.address}>{venue.vicinity}</span>
      <span className={s.types}>{renderTypes()}</span>
    </li>
  );
};

export default withRouter(Result);
