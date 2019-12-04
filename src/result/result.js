import React from 'react';
import VenueContext from '../VenuesContext';
import { withRouter } from 'react-router-dom';
import './Result.css';
import Rating from '../Rating/Rating';

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
        className='result'
        key={venue.id}
        onClick={() => this.handleExpanded(venue.id)}
      >
        <div className='result_rating'>
          <h3>{venue.venue_name}</h3>
          <span className='rating'>
            <Rating value={venue.avgRating} symbol='&#x2605;' />
          </span>
        </div>
        <div className='result_address'>
          <span>{venue.venue_type}</span>
          <Rating
            className='price_span'
            value={venue.avgPrice}
            symbol='&#36;'
          />
          <p>Phone: {venue.phone ? venue.phone : 'Not provided'}</p>
          <p>
            <span>Address: {venue.address ? venue.address : 'Not provided'}
          </span>{' '}
          <span className='city'>
            {venue.city ? venue.city : 'Not provided'}
          </span>
          ,
          <span className='state'>
            {' '}
            {venue.state ? venue.state : 'Not provided'}
          </span>
          </p>
          <p>Website: {venue.url ? venue.url : 'Not provided'}</p>
        </div>
        <button onClick={() => this.handleExpanded(venue.id)}>See more</button>
      </li>
    );
  }
}

export default withRouter(Result);
