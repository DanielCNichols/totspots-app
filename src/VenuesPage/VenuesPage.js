import React, { useEffect, useState } from 'react';
import VenuesContext from '../VenuesContext';
import Review from '../Review/Review';
import VenueProfile from '../VenueProfile/VenueProfile';
import './VenuesPage.css';
import ApiService from '../services/api-service';
import { detail } from '../reference';
import config from '../config';
import Rating from '../Rating/Rating';
import { FaStar } from 'react-icons/fa';

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
  let heroStyle = {
    width: '100%',
    height: '300px',
    backgroundColor: 'gray',
  };

  let sectionStyle = {
    marginTop: '50px',
  };

  let mainStyle = {
    width: '80%',
    margin: '25px auto',
    backgroundColor: 'lightBlue',
    display: 'grid',
    gridTemplateColumns: '2fr 1fr',
    gridColumnGap: '25px',
    padding: '20px',
  };

  let venueHeader = {
    width: '90%',
    gridColumn: 1,
    height: '300px',
    backgroundColor: 'yellow',
    margin: '0 auto',
    textAlign: 'left',
  };

  let infoCard = {
    width: '90%',
    boarder: '1px solid black',
    height: '300px',
    padding: '20px',
    backgroundColor: 'lightGreen',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
  };

  let reviews = {
    gridColumn: '1',
    width: '90%',
    margin: '0 auto',

    backgroundColor: 'gray',
  };

  let photos = {
    width: '90%',
    margin: '25px auto',
    gridColumn: '1',
    padding: '10px',
    backgroundColor: 'orange',
  };

  let photoHolder = {};

  console.log(venue);
  return (
    <section style={sectionStyle}>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <div style={heroStyle}>
            {/* <img
              src={`https://maps.googleapis.com/maps/api/place/photo?maxwidth=1000&photoreference=${venue.result.photos[0].photo_reference}&key=${config.GKEY}`}
            /> */}
          </div>
          <div style={mainStyle}>
            <div style={venueHeader}>
              <h2 style={{ textAlign: 'left' }}>{venue.result.name}</h2>
              <Rating
                value={venue.result.rating}
                symbol={FaStar}
                iconClass="star"
              />
              <div className="types">{renderTypes()}</div>
              <div>
                <button>Add Review</button>
                <button>Add favorite</button>
              </div>
              <h4>Features</h4>
              <ul>
                {venue.amenities.map(amenity => {
                  return <li>{amenity.amenity_name}</li>;
                })}
              </ul>
            </div>
            {/* Keep this sticky */}
            <div style={infoCard}>
              <div className="info-element">
                <p>Icon</p>
                <span>{venue.result.formatted_address}</span>
              </div>
              <div className="info-element">
                <p>Icon</p>
                <span>{venue.result.formatted_phone_number}</span>
              </div>
              <div className="info-element">
                <p>Icon visit</p>
                <a href={venue.result.website}>Visit Page</a>
              </div>
              <div className="info-element">
                <p>Icon directions</p>
                <a href={venue.result.url}>Get Directions</a>
              </div>
            </div>
            <div className="opening hours">
              <ul>
                Business Hours
                {venue.result.opening_hours.weekday_text.map(text => {
                  return <li>{text}</li>;
                })}
              </ul>
            </div>
            <div style={photos}>
              <div>
                <h3>Photos</h3>
                <div style={photoHolder}>
                  {venue.result.photos.map(photo => {
                    return (
                      <img
                        src={`https://maps.googleapis.com/maps/api/place/photo?maxwidth=200&photoreference=${photo.photo_reference}&key=${config.GKEY}`}
                        alt="yeet"
                      />
                    );
                  })}
                </div>
              </div>
            </div>

            {/* //! Make a "reviews component that takes the respective arrays of
            //reviews. We will have a switch that toggles tsreview/googlereview" */}
            <div style={reviews}>
              {venue.result.reviews.map(review => {
                return (
                  <div style={{ margin: '25px auto' }}>
                    <p>{review.author_name}</p>
                    <p>{review.relative_time_description}</p>
                    <p>{review.rating}</p>
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

// export default class VenuesPage extends Component {
//   static contextType = VenuesContext;

//   componentDidMount() {
//     this.context.clearError();
//     let venueId = this.props.match.params.venue_id;
//     ApiService.getVenueProfile(venueId)
//       .then(venue => {
//         this.context.setSelectedVenue(venue);
//       })
//       .then(() => {
//         ApiService.getReviews(venueId)
//           .then(reviews => {
//             this.context.setReviews(reviews);
//           })
//           .then(() => {
//             ApiService.getAmenities(venueId).then(amenities => {
//               this.context.setAmenities(amenities);
//             });
//           });
//       })
//       .catch(this.context.setError);
//   }

//   prerender() {
//     let { reviews } = this.context;
//     if (reviews.length === 0) {
//       return (
//         <div>
//           <p>Be the first to review this venue!</p>
//         </div>
//       );
//     } else {
//       return (
//         <ul>
//           {reviews.map(reviews => (
//             <Review reviews={reviews} key={reviews.id} />
//           ))}
//         </ul>
//       );
//     }
//   }

//   render() {
//     return (
//       <section className="VenuesPage">
//         <VenueProfile></VenueProfile>
//         <header>
//           <h3>Here's what people are saying: </h3>
//         </header>
//         {this.prerender()}
//       </section>
//     );
//   }
// }
