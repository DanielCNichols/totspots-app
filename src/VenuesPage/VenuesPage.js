import React, { useEffect, useState } from 'react';
import { TsReview, GoogleReview } from '../Review/Review';
import s from './VenuesPage.module.css';
import InfoCard from '../InfoCard/InfoCard';
import ApiService from '../services/api-service';
import config from '../config';
import Rating from '../Rating/Rating';
import { FaStar, FaChild } from 'react-icons/fa';
import FormContainer from '../FormContainer/FormContainer';
import { MdFavorite, MdFavoriteBorder } from 'react-icons/md';

import PhotoElement from '../PhotoElement/PhotoElement';

const VenuesPage = props => {
  const [venue, setVenue] = useState({});
  const [tsReviews, setTSReviews] = useState(true);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    ApiService.getVenueDetails(props.match.params.id)
      .then(venue => {
        setVenue(venue);
        console.log('this is the venue', venue);
        setLoading(false);
      })
      .catch(err => setError(err));
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function handleSubmitReview(review) {
    let newReviews = [review, ...venue.tsReviews];
    console.log(newReviews);
    setVenue({ ...venue, tsReviews: newReviews });
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

  const handleAddFavorite = () => {
    setVenue({ ...venue, favorite: !venue.favorite });
  };

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
              <div className={s.venueHeader}>
                <h2>{venue.result.name}</h2>
                {/* This button should be refactored into it's own component */}
                <button onClick={() => handleAddFavorite()}>
                  {venue.favorite ? (
                    <MdFavorite className={s.addFavorite} />
                  ) : (
                    <MdFavoriteBorder className={s.addFavorite} />
                  )}
                </button>
              </div>
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
            </div>

            <InfoCard venue={venue.result} />

            <div className={s.photos}>
              <div>
                <h3>Photos</h3>
                <PhotoElement photos={venue.result.photos} />
              </div>
            </div>

            <div className={s.reviewControls}>
              <FormContainer
                handleSubmit={handleSubmitReview}
                id={props.match.params.id}
              />

              <button onClick={() => handleToggleReviews()}>Toggel</button>
            </div>

            <div className={s.reviews}>
              <h3>Here's what people are saying: </h3>
              {tsReviews && (
                <>
                  {venue.tsReviews ? (
                    venue.tsReviews.map(review => {
                      return <TsReview key={review.id} review={review} />;
                    })
                  ) : (
                    <p>Looks like there are no reviews... yet!</p>
                  )}
                </>
              )}

              {!tsReviews && (
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
