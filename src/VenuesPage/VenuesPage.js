import React, { useEffect, useState } from 'react';
import { TsReview, GoogleReview } from '../Review/Review';
import s from './VenuesPage.module.css';
import InfoCard from '../InfoCard/InfoCard';
import ApiService from '../services/api-service';
import { detail } from '../reference';
import config from '../config';
import Rating from '../Rating/Rating';
import ReviewForm from '../ReviewForm/ReviewForm';
import { FaStar, FaChild } from 'react-icons/fa';
import FormContainer from '../FormContainer/FormContainer';
import { MdRateReview, MdFavorite } from 'react-icons/md';

import PhotoElement from '../PhotoElement/PhotoElement';

//! If mobile, render the review form as an added div. Else, render it as a Modal.
//Todo: Refactor and export modal from the other thing.

const VenuesPage = props => {
  const [venue, setVenue] = useState({});
  const [tsReviews, setTSReviews] = useState(true);
  const [showReviewForm, setShowReviewForm] = useState(false);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // ApiService.getVenueDetails(props.match.params.id)
    //   .then(venue => {
    setVenue(detail);
    setLoading(false);
    // })
    //   .catch(err => setError(err));

    // setVenue(detail);
    // setLoading(false);
  }, []);

  function handleToggleReviewForm() {
    setShowReviewForm(!showReviewForm);
  }

  function handleToggleReviews() {
    setTSReviews(!tsReviews);
  }

  function renderTypes() {
    let { types } = venue.result;
    let formatted = types.map(t =>
      t !== 'establishment' && t !== 'point_of_interest'
        ? t.split('_').join(' ')
        : ''
    );

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
    <section className={s.venuePageContainer}>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <div className={s.hero}>
            <img
              src={`https://maps.googleapis.com/maps/api/place/photo?maxwidth=1000&photoreference=${venue.result.photos[0].photo_reference}&key=${config.GKEY}`}
              alt="venue front"
            />
          </div>
          <div className={s.venueContainer}>
            <div className={s.venueInfo}>
              <h2>{venue.result.name}</h2>
              <Rating
                value={venue.result.rating}
                symbol={FaStar}
                iconClass="star"
              />
              <div className={s.types}>{renderTypes()}</div>
              <ul className={s.features}>
                {venue.amenities.map(amenity => {
                  return <li key={amenity.id}>{amenity.amenity_name}</li>;
                })}
              </ul>
              <div className={s.ratings}>
                <div className={s.ratingElement}>
                  <p>Avg. Totspots Rating:</p>
                  <Rating
                    value={venue.tsAverages.avgrating}
                    symbol={FaChild}
                    iconClass="totspots"
                  />
                </div>
              </div>
              <div className={s.businessControls}>
                <button>
                  <MdFavorite className={s.addFavorite} />
                  <p>Add to favorites</p>
                </button>
              </div>
            </div>

            <InfoCard venue={venue.result} />

            <div className={s.photos}>
              <div>
                <h3>Photos</h3>
                <PhotoElement photos={venue.result.photos} />
              </div>
            </div>

            <FormContainer />
            <div className={s.reviewControls}>
              <button onClick={() => handleToggleReviewForm()}>
                <MdRateReview className={s.addReview} />
                <p>Add a Review</p>
              </button>
              <button onClick={() => handleToggleReviews()}>Toggel</button>
            </div>

            <div className={s.reviews}>
              <div className={s.reviewFormContainer}>
                {showReviewForm && (
                  <ReviewForm
                    venue_id={props.match.params.id}
                    closeForm={handleToggleReviewForm}
                  />
                )}
              </div>

              {tsReviews && !showReviewForm && (
                <>
                  <h3>Here's what people are saying: </h3>
                  {venue.tsReviews ? (
                    venue.tsReviews.map(review => {
                      return <TsReview key={review.id} review={review} />;
                    })
                  ) : (
                    <p>Looks like there are no reviews... yet!</p>
                  )}
                </>
              )}

              {!tsReviews &&
                !showReviewForm(
                  <>
                    {venue.result.reviews.map((review, idx) => {
                      return <GoogleReview key={idx} review={review} />;
                    })}
                  </>
                )}
            </div>
          </div>
        </>
      )}
    </section>
  );
};

export default VenuesPage;
