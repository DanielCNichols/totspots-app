import React, { Component } from 'react';
import VenuesContext from '../VenuesContext';
import ApiService from '../services/api-service';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import './VenueProfile.css';
import TokenService from '../services/TokenService';
import Rating from '../Rating/Rating';

class VenueProfile extends Component {
  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.object,
    }),
  };

  static contextType = VenuesContext;

  handleAddFavorite(venueId) {
    if (!TokenService.hasToken()) {
      this.props.history.push('/login');
    } else {
      ApiService.addFavorite(venueId).catch(this.context.setError);
    }
  }

  handleAddReview(venueId) {
    this.props.history.push(`/addreview/${venueId}`);
  }

  renderAmenities() {
    let { amenities } = this.context;
    let list = amenities.map((amenity, index) => {
      return <li key={index}>{amenity.amenity_name}</li>;
    });
    return list;
  }

  render() {
    let venue = this.context.selectedVenue;
    return (
      <section className="venueProfile">
        <header className="venueProfile_header">
          <h2>{venue.venue_name}</h2>
        </header>
        <div className="contact">
          <p className="type">Type: {venue.venue_type}</p>
          <p>{venue.address}</p>
          <span className="city">{venue.city}</span>,{' '}
          <span className="state">{venue.state}</span>
          <span> {venue.zipcode}</span>
          <p>{venue.phone}</p>
          <p className="link">
            <a href={venue.url} rel="noopener noreferrer" target="_blank">
              {venue.url}
            </a>
          </p>
        </div>
        <div className="ratings">
          <div className="average">
            Overall Rating:{' '}
            <span className="rating">
              <Rating value={venue.avgRating} symbol="&#x2605;" />
            </span>
          </div>
          <div className="average">
            Overall Price:{' '}
            <span className="price">
              <Rating value={venue.avgPrice} symbol="&#36;" />
            </span>
          </div>
          <div className="average">
            Overall Volume Level:{' '}
            <span className="volume">
              <Rating value={venue.avgVolume} symbol="&#128227;" />
            </span>
          </div>
        </div>
        <div className="amenities">
          <h3>Features</h3>
          {this.renderAmenities()}
        </div>
        <div className="venue_controls">
          <button
            onClick={() => {
              this.handleAddReview(venue.id);
            }}
          >
            Add a review
          </button>
          <button
            onClick={() => {
              this.handleAddFavorite(venue.id);
            }}
          >
            Add to Saved Venues
          </button>
        </div>
      </section>
    );
  }
}

export default withRouter(VenueProfile);
