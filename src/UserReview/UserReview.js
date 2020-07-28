import React from 'react';
import { withRouter } from 'react-router-dom';
import s from './UserReview.module.css';
import Rating from '../Rating/Rating';
import { TsReview } from '../Review/Review';

//! This is similar to the favorite, but will render a review below it.
const UserReview = props => {
  return (
    <li>
      <div className={s.venueHeader}>
        <h3>Name</h3>
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

      <ul className={s.reviewContainer}>
        You said:
        <TsReview review={props.review} />
      </ul>
    </li>
  );
};

export default UserReview;
