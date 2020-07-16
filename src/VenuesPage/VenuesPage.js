import React, { useEffect, useState } from 'react';
import VenuesContext from '../VenuesContext';
import Review from '../Review/Review';
import VenueProfile from '../VenueProfile/VenueProfile';
import './VenuesPage.css';
import ApiService from '../services/api-service';

//TODO: Rework this into a funcitonal component.
//TODO: We can probably get rid of setSeelcted venue in the context provider
//* We will need to make a places request with the following fields:
//fields: geometry, name, icon, photo, place_id, type, url, vicinity, formatted_phone_number, opening_hours, website(?), price_level, rating, review, user_ratings_total
//Place details request returns up to 10 photo elements

const VenuesPage = props => {
  const [venue, setVenue] = useState({});
  const [error, setError] = useState(null);
  useEffect(() => {
    //API GET THING
    //Set thing
    //set error
  });

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

  return (
    <section style={sectionStyle}>
      <div style={heroStyle}>
        <p>This is the hero banner</p>
      </div>
      <div style={mainStyle}>
        <div style={venueHeader}>
          <h2 style={{ textAlign: 'left' }}>Cafe Vienna</h2>
          <p>This is the rating</p>
          <p>These are the types</p>
          <div>
            <button>Add Review</button>
            <button>Add favorite</button>
          </div>
          <h4>Features</h4>
          <ul>
            <li>Thing</li>
            <li>Thing</li>
            <li>Thing</li>
            <li>Thing</li>
          </ul>
        </div>

        {/* Keep this sticky */}
        <div style={infoCard}>
          <p>ICON: INFO </p>
          <p>ICON: INFO </p>
          <p>ICON: INFO </p>
          <p>ICON: INFO </p>
        </div>

        <div style={photos}>
          <div>
            <h3>Photos</h3>
            <div style={photoHolder}>
              <img src="" alt="yeet" />
              <img src="" alt="yeet" />
              <img src="" alt="yeet" />
              <img src="" alt="yeet" />
              <img src="" alt="yeet" />
              <img src="" alt="yeet" />
              <img src="" alt="yeet" />
              <img src="" alt="yeet" />
              <img src="" alt="yeet" />
              <img src="" alt="yeet" />
            </div>
          </div>
        </div>

        <div style={reviews}>
          <div>
            <p>here's ar review</p>
            <p>here's ar review</p>
            <p>here's ar review</p>
            <p>here's ar review</p>
            <p>here's ar review</p>
            <p>here's ar review</p>
          </div>
        </div>
      </div>
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
