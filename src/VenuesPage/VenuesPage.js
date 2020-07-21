import React, { useEffect, useState } from 'react';
import VenuesContext from '../VenuesContext';
import Review from '../Review/Review';
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

const VenuesPage = props => {
  const [venue, setVenue] = useState({});
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
              src={`https://maps.googleapis.com/maps/api/place/photo?maxwidth=800&photoreference=${venue.result.photos[0].photo_reference}&key=${config.GKEY}`}
              alt="venue front"
            />
          </div>
          <div className={s.venueContainer}>
            <div className={s.venueInfo}>
              <h2>{venue.result.name}</h2>
              <div className={s.types}>{renderTypes()}</div>
              {/* <h4>Features</h4> */}
              <ul className={s.features}>
                {venue.amenities.map(amenity => {
                  return <li>{amenity.amenity_name}</li>;
                })}
              </ul>
              <div className={s.ratings}>
                <div className={s.ratingElement}>
                  <p>Avg. Google Rating:</p>
                  <Rating
                    value={venue.result.rating}
                    symbol={FaStar}
                    iconClass="star"
                  />
                </div>
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
                <div className={s.photoContainer}>
                  {venue.result.photos.map(photo => {
                    return (
                      <img
                        src={`https://maps.googleapis.com/maps/api/place/photo?maxwidth=500&photoreference=${photo.photo_reference}&key=${config.GKEY}`}
                        alt="yeet"
                      />
                    );
                  })}
                </div>
              </div>
            </div>

            {/* //! Make a "reviews component that takes the respective arrays of
            //reviews. We will have a switch that toggles tsreview/googlereview" */}
            <h3>Here's what people are saying: </h3>
            <div className={s.reviews}>
              {venue.result.reviews.map(review => {
                return (
                  <div className={s.review}>
                    <p style={{ fontWeight: 'bold' }}>{review.author_name}</p>
                    <p>
                      <Rating
                        value={review.rating}
                        iconClass="star"
                        symbol={FaStar}
                      />
                    </p>
                    <p>Reviewed {review.relative_time_description}</p>
                    <p>{review.text}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </>
      )}
    </section>
  );
};

export default VenuesPage;
