import React from 'react';
import VenueContext from '../VenuesContext';
import { withRouter } from 'react-router-dom';
import './Result.css';
import Rating from '../Rating/Rating'

class Result extends React.Component {
  static contextType = VenueContext;

  handleExpanded(venueId) {
    this.context.setSelectedVenue(venueId);
    this.props.history.push(`/venue/${venueId}`);
  }

  render() {
    let { venue } = this.props;
    return (
      <li
        className="result"
        key={venue.id}
        onClick={() => this.handleExpanded(venue.id)}
      >
        <div className="result_rating">
          <h3>{venue.venue_name}</h3>
          <span className="rating"><Rating value={venue.avgRating} symbol="&#x2605;"/></span>
        </div>
        <p className="price"><Rating value={venue.avgPrice} symbol="&#36;"/></p>
        <span>{venue.address}</span> <span className="city">{venue.city}</span>,
        <span className="state"> {venue.state}</span>
        <button onClick={() => this.handleExpanded(venue.id)}>See more</button>
      </li>
    );
  }
}

export default withRouter(Result);
