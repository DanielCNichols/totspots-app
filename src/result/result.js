import React from 'react';
import VenuesContext from '../VenuesContext'
import ApiService from '../services/api-service'
import{withRouter} from 'react-router-dom'

export default class Result extends React.Component {
  static contextType = VenuesContext

  handleExpanded(venueId) {
    console.log(venueId)
    ApiService.getReviews(venueId)
    .then(reviews => {
    this.context.setReviews(reviews);
  })
    .catch(this.context.setError)
    // Maybe move to seperate view for the expanded venue view.
    };

    //Make 'see more a seperate view"
    //Make the request on the click.

  render() {
    let {venue} = this.props
    console.log(venue)
    return (
     <li key={venue.id}>
      <h3>{venue.venue_name}</h3>
      <p>{venue.type}</p>
      <p>{venue.address}</p>
      <span>{venue.city}</span>, <span>{venue.state}</span><span>{venue.zipcode}</span>

      <button onClick={() =>ApiService.getReviews(venue.id)}>See more</button>
      </li>
    );
  }
}
