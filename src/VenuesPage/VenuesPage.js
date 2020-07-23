import React, { useEffect, useState } from 'react';
import VenuesContext from '../VenuesContext';
import { TsReview, GoogleReview } from '../Review/Review';
import VenueProfile from '../VenueProfile/VenueProfile';
import s from './VenuesPage.module.css';
import ApiService from '../services/api-service';
import { detail } from '../reference';
import config from '../config';
import Rating from '../Rating/Rating';
import { FaStar, FaChild } from 'react-icons/fa';
import {
  MdLocationOn,
  MdDirections,
  MdPhone,
  MdOpenInNew,
} from 'react-icons/md';

import PhotoElement from '../PhotoElement/PhotoElement';
const VenuesPage = props => {
  const [venue, setVenue] = useState({});
  const [tsReviews, setTSReviews] = useState(true);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // ApiService.getVenueDetails(props.match.params.id)
    //   .then(venue => {
    //     setVenue(venue);
    //     setLoading(false);
    //   })
    //   .catch(err => setError(err));

    setVenue(detail);
    setLoading(false);
  }, []);

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

  console.log(venue);
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
              {/* <h4>Features</h4> */}
              <ul className={s.features}>
                {venue.amenities.map(amenity => {
                  return <li>{amenity.amenity_name}</li>;
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
                <button>Add Review</button>
                <button>Add favorite</button>
              </div>
            </div>

            <div className={s.infoCard}>
              <div className={s.infoElement}>
                <MdLocationOn />
                <span>{venue.result.vicinity}</span>
              </div>
              <div className={s.infoElement}>
                <MdPhone />
                <span>{venue.result.formatted_phone_number}</span>
              </div>
              <div className={s.infoElement}>
                <MdOpenInNew />
                <a href={venue.result.website}>Visit Page</a>
              </div>
              <div className={s.infoElement}>
                <MdDirections />
                <a href={venue.result.url}>Get Directions</a>
              </div>

              <div className={s.openingHours}>
                <ul>
                  <span>Business Hours</span>
                  {venue.result.opening_hours.weekday_text.map(text => {
                    return <li>{text}</li>;
                  })}
                </ul>
              </div>
            </div>

            <div className={s.photos}>
              <div>
                <h3>Photos</h3>
                <PhotoElement photos={venue.result.photos} />
              </div>
            </div>

            <div className={s.reviews}>
              <button onClick={() => handleToggleReviews()}>Toggle</button>

              <h3>Here's what people are saying: </h3>
              {tsReviews && (
                <>
                  {venue.tsReviews ? (
                    venue.tsReviews.map(review => {
                      return <TsReview review={review} />;
                    })
                  ) : (
                    <p>Looks like there are no reviews... yet!</p>
                  )}
                </>
              )}

              {!tsReviews && (
                <>
                  {venue.result.reviews.map(review => {
                    return <GoogleReview review={review} />;
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
