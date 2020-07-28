import React from 'react';
import ApiService from '../services/api-service';
import VenuesContext from '../VenuesContext';
import s from './Favorite.module.css';
import { withRouter } from 'react-router-dom';

const Favorite = props => {
  function handleRemoveFavorite() {
    console.log('removed');
  }

  return (
    <li className={s.favorite}>
      <div className={s.venueHeader}>
        <h3>Name</h3>
        <button onClick={() => props.deleteFavorite(props.favorite.venueid)}>
          Remove
        </button>
      </div>

      <div className={s.ratingsContainer}>
        <p>Price</p>
        <p>Google Rating</p>
      </div>
      <div className={s.about}>
        <p>Types | types | types</p>
        <p>108 Main St. Durham | 919-698-0847</p>
      </div>

      <div className={s.buttons}>
        <p>Directions</p>
        <p>Website</p>
        <p>Go to venue page</p>
      </div>
    </li>
  );
};

export default withRouter(Favorite);
