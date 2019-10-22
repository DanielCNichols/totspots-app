import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import VenuesContext from '../VenuesContext';
import ApiService from '../services/api-service';

export default class VenueProfile extends Component {
  static contextType = VenuesContext;



  //add a component will mount to do the fetch. 

  handleAddFavorite(venueId) {
    ApiService.addFavorite(venueId).catch(this.context.setError);
  }


  renderAmenities() {
    let {amenities} = this.context
    let list = amenities.map((amenity, index) => {
     return  <div key={index}>{amenity.amenity_name}</div>
    })
    return list
  }

  render() {
    let venue = this.context.selectedVenue;
    return (
      <section className='venueProfile'>
        <header>
          <h2>{venue.venue_name}</h2>
        </header>
        <p>{venue.venue_type}</p>
        <p>{venue.address}</p>
        <span>{venue.city}</span>, <span>{venue.state}</span>{' '}
        <span>{venue.zipcode}</span>
        <p>{venue.phone}</p>
        <p>{venue.url}</p>
        {this.renderAmenities()}
        <div className='ratings'>
          <p>
            Overall Rating: <span>{Math.round(venue.avgRating)}/5</span>
          </p>
          <p>
            Overall Price: <span>{Math.round(venue.avgPrice)}/5</span>
          </p>
          <p>
            Overall Volume Level: <span>{Math.round(venue.avgVolume)}/5</span>
          </p>
        </div>
        <Link to={`/addreview/${venue.id}`}>
          <button>ADD A REVIEW</button>
        </Link>
        <button onClick={() => {this.handleAddFavorite(venue.id)}} >
          Add to Favorites
        </button>
      </section>
    );
  }
}
