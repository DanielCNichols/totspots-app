import React from 'react';
import VenueContext from '../VenuesContext';
import { withRouter } from 'react-router-dom';
import './Result.css';
import Rating from '../Rating/Rating';
import config from '../config';

class Result extends React.Component {
  static contextType = VenueContext;

  handleExpanded(venueId) {
    this.context.setSelectedVenue(venueId);
    this.props.history.push(`/venue/${venueId}`);
  }

  render() {
    let { venue } = this.props;
    console.log('venue', venue);
    console.log('venue photo', venue.photos[0].photo_reference);
    return (
      <li
        className="result"
        key={venue.id}
        onClick={() => this.handleExpanded(venue.id)}
      >
        <img
          src={`https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${venue.photos[0].photo_reference}&key=${config.GKEY}
`}
        />
        <div className="result_rating">
          <h3>{venue.name}</h3>

          <span className="rating">
            <Rating value={venue.rating} symbol="&#x2605;" />
          </span>
        </div>
        <div className="result_address">
          <span>{venue.types[0]}</span>
          <Rating
            className="price_span"
            value={venue.price_level}
            symbol="&#36;"
          />
        </div>
        <button onClick={() => this.handleExpanded(venue.id)}>See more</button>
      </li>
    );
  }
}

export default withRouter(Result);
