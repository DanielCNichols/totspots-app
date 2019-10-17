import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import VenuesContext from '../VenuesContext'
import ApiService from '../services/api-service'

export default class VenueProfile extends Component {
  static contextType =  VenuesContext



  render() {
    let venue = this.context.selectedVenue
    return(
      <section className='venueProfile'>
        <header>
          <h2>{venue.venue_name}</h2>
        </header>
      <p>{venue.venue_type}</p>
      <p>{venue.address}</p>
      <span>{venue.city}</span>, <span>{venue.state}</span> <span>{venue.zipcode}</span>
      <p>{venue.phone}</p>
      <p>{venue.url}</p>
      <div className='ratings'>
        <p>Overall Rating: <span>{Math.round(venue.avgRating)}/5</span></p>
        <p>Overall Price: <span>{Math.round(venue.avgPrice)}/5</span></p>
        <p>Overall Volume Level: <span>{Math.round(venue.avgVolume)}/5</span></p>
      </div>
      <Link to={`/addreview/${venue.id}`}><button>ADD A REVIEW</button></Link>
      <button>Add to Favorites</button> 
      </section>
    )
  }
}