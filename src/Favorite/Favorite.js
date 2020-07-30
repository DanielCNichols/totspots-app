import React from 'react';
import ApiService from '../services/api-service';
import VenuesContext from '../VenuesContext';
import { Link } from 'react-router-dom';
import s from './Favorite.module.css';
import { withRouter } from 'react-router-dom';
import Rating from '../Rating/Rating';
import { FaDollarSign, FaStar, FaComments, FaChild } from 'react-icons/fa';
import { MdDirections, MdOpenInNew, MdRemoveCircle } from 'react-icons/md';

const Favorite = ({
  favorite,
  favorite: { venueid, result, deleteFavorite },
}) => {
  function handleRemoveFavorite() {}

  function renderTypes() {
    let { types } = result;
    let formatted = types.map(t =>
      t !== 'establishment' && t !== 'point_of_interest'
        ? t.split('_').join(' ')
        : ''
    );

    //! Make this an li and use that to add bullet points
    return formatted.map((t, idx) => {
      return t.length ? (
        <p
          style={{
            display: 'inline-block',
            textTransform: 'capitalize',
          }}
          key={idx}
        >
          {t}
        </p>
      ) : null;
    });
  }

  return (
    <li className={s.favorite}>
      <div className={s.venueHeader}>
        <h3>{result.name}</h3>
        <Rating
          className={s.price}
          value={result.price_level}
          symbol={FaDollarSign}
          iconClass="dollar"
        />
      </div>

      <div className={s.ratingsContainer}>
        <Rating value={result.rating} symbol={FaStar} iconClass="star" />
        <Rating
          value={favorite.avgrating}
          symbol={FaChild}
          iconClass="totspots"
        />
        <Rating
          value={favorite.avgvolume}
          symbol={FaStar}
          iconClass="totspots"
        />
      </div>
      <div className={s.about}>
        <div className={s.types}>{renderTypes()}</div>
        <p>{result.vicinity}</p>
        <p>{result.formatted_phone_number}</p>
      </div>

      <div className={s.favoriteControls}>
        <div className={s.icon}>
          <MdOpenInNew />
          <a href={result.website}>Visit Page</a>
        </div>

        <div className={s.icon}>
          <MdDirections className={s.directions} />
          <a href={result.url}>Directions</a>
        </div>

        <div className={s.icon}>
          <FaComments className={s.comments} />
          <Link to={`venues/${venueid}`}>See Reviews</Link>
        </div>

        <div className={s.icon}>
          <MdRemoveCircle id={s.delete} />
          <span>Remove</span>
        </div>
      </div>
    </li>
  );
};

export default withRouter(Favorite);
