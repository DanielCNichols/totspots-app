import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import VenuesContext from '../VenuesContext'

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
      <span>{venue.city}</span>, <span>{venue.state}</span><span>{venue.zipcode}</span>
      <p>{venue.phone}</p>
      <p>{venue.url}</p>
      <div className='ratings'>
        <p>Overall Rating: <span>{venue.avgRating}</span></p>
        <p>Overall Price: <span>{venue.avgPrice}</span></p>
        <p>Overall Volume Level: <span>{venue.avgVolume}</span></p>
      </div>
      <Link to={`/addreview/${venue.id}`}><button>ADD A REVIEW</button></Link>
      <button>Add to Favorites</button> 
      </section>
    )
  }
}