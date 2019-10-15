import React from 'react';
import VenueContext from '../VenuesContext'
import ApiService from '../services/api-service'
import{withRouter} from 'react-router-dom'

class Result extends React.Component {
  static contextType = VenueContext

  handleExpanded(venueId) {
    console.log(venueId)
    ApiService.getReviews(venueId)
    .then(reviews => { 
    this.context.setReviews(reviews)
  })
    .catch(this.context.setError)
    this.props.history.push('/venue/:venueId')
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

      <button onClick={() => this.handleExpanded(venue.id)}>See more</button>
      </li>
    );
  }
}

export default withRouter(Result)