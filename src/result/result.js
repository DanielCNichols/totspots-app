import React from 'react';
import VenueContext from '../VenuesContext';
import ApiService from '../services/api-service';
import { withRouter } from 'react-router-dom';

class Result extends React.Component {
  static contextType = VenueContext;

  handleExpanded(venueId) {
    ApiService.getReviews(venueId)
      .then(reviews => {
        this.context.setReviews(reviews);
      })
      ApiService.getAmenities(venueId).then(amenities => {
        this.context.setAmenities(amenities);
        console.log(this.context.amenities)
      })
      .catch(this.context.setError);
    this.context.setSelectedVenue(venueId);
    this.props.history.push(`/venue/${venueId}`);
  }

  //Make 'see more a seperate view"
  //Make the request on the click.

  render() {
    let { venue } = this.props;
    return (
      <li key={venue.id}>
        <h3>{venue.venue_name}</h3>
        <p>{venue.type}</p>
        <p>{venue.address}</p>
        <span>{venue.city}</span>, <span>{venue.state}</span>
        <span>{venue.zipcode}</span>
        <p>Overall Rating</p> <span>{Math.round(venue.avgRating)}/5</span>
        <p>Price {Math.round(venue.avgPrice)}/5</p>
        <p>Volume Level {Math.round(venue.avgVolume)}/5</p>
        <button onClick={() => this.handleExpanded(venue.id)}>See more</button>
      </li>
    );
  }
}

export default withRouter(Result);
