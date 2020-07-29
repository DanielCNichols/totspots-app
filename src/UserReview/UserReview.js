import React from 'react';
import { withRouter } from 'react-router-dom';
import s from './UserReview.module.css';
import Rating from '../Rating/Rating';
import { TsReview } from '../Review/Review';
import { FaDollarSign, FaStar, FaChild } from 'react-icons/fa';
import { FiVolume } from 'react-icons/fi';
import { MdEdit, MdDelete } from 'react-icons/md';
import moment from 'moment';

//! This is similar to the favorite, but will render a review below it.
const UserReview = ({ review, review: { result } }) => {
  return (
    <li className={s.userReview}>
      <div className={s.venueHeader}>
        <h3>{result.name}</h3>
        <p>Visited {moment(review.date_created).format('MMMM, do, YYYY')}</p>
      </div>
      <div className={s.ratingsContainer}>
        <div className={s.ratingElement}>
          <p>Totspots rating:</p>
          <div>
            <Rating
              value={review.totspots_rating}
              symbol={FaChild}
              iconClass="totspots"
            />
          </div>
        </div>
        <div className={s.ratingElement}>
          <p>Volume level:</p>
          <Rating
            value={review.volume_rating}
            symbol={FiVolume}
            iconClass="star"
          />
        </div>

        {/* on click truncate/expand somehow using css classes? */}
        {review.content && (
          <>
            <div className={s.content}>
              <p>{review.content}</p>
            </div>
          </>
        )}
      </div>
      <div className={s.userReviewControls}>
        <button>
          <MdEdit id={s.edit} />
          <span>Edit Review</span>
        </button>
        <button>
          <MdDelete id={s.delete} />
          <span>Delete Review</span>
        </button>
      </div>
    </li>
  );
};

export default UserReview;
