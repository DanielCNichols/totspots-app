import React, { useState, useEffect } from 'react';
import Votes from '../Votes/Votes';
import VenueContext from '../VenuesContext';
import moment from 'moment';
import s from './Review.module.css';
import Rating from '../Rating/Rating';
import { FaChild, FaStar } from 'react-icons/fa';

const TsReview = ({ review }) => {
  return (
    <li className={s.review}>
      <p>
        {review.first_name} {review.last_name}
      </p>
      {/* TS rating and Volume Level*/}
      <div className={s.ratingSpan}>
        <Rating
          value={review.totspots_rating}
          symbol={FaChild}
          iconClass="totspots"
        />
      </div>
      <p>Reviewed {moment(review.date_created).format('MMMM do, YYYY')}</p>

      <p>{review.content}</p>

      {/* <Votes key={review.id} count={review.count}></Votes> */}
    </li>
  );
};

const GoogleReview = ({ review }) => {
  return (
    <li className={s.review}>
      <p style={{ fontWeight: 'bold' }}>{review.author_name}</p>
      <div className={s.ratingSpan}>
        <Rating value={review.rating} iconClass="star" symbol={FaStar} />
      </div>
      <p>Reviewed {review.relative_time_description}</p>
      <p>{review.text}</p>
    </li>
  );
};

export { TsReview, GoogleReview };
