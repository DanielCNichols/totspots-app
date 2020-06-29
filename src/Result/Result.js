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

  renderTypes() {
    let { types } = this.props.venue;

    let formatted = types.map(t =>
      t !== 'establishment' ? t.split('_').join(' ') : null
    );
    return formatted.map((t, idx) => {
      return (
        <p
          style={{
            display: 'inline-block',
            margin: '5px',
            textTransform: 'capitalize',
          }}
          key={idx}
        >
          {t}
        </p>
      );
    });
  }

  render() {
    let { venue } = this.props;
    return (
      <li
        className="result"
        key={venue.id}
        onClick={() => this.handleExpanded(venue.id)}
      >
        <div className="resultPhoto">
          <img
            src={`https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${venue.photos[0].photo_reference}&key=${config.GKEY}
`}
          />
        </div>
        <div className="result_rating">
          <h3>{venue.name}</h3>

          <span className="rating">
            <Rating value={venue.rating} symbol="&#x2605;" />
          </span>
        </div>
        <div className="result_address">
          {this.renderTypes()}
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
