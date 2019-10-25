import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import VenuesContext from '../VenuesContext';
import ApiService from '../services/api-service';
import PropTypes from 'prop-types'
import './VenueProfile.css'

export default class VenueProfile extends Component {

  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.object
    }),
  };

  static contextType = VenuesContext;



  handleAddFavorite(venueId) {
    ApiService.addFavorite(venueId).catch(this.context.setError);
  }


  renderRating() {
    const avgRating = Math.round(this.context.selectedVenue.avgRating);
    let stars;

    switch (avgRating) {
      case 1:
        stars =
          (<span>&#x2605;</span>);
        break;
      case 2:
        stars = (
          <div>
            <span>&#x2605;</span>
            <span>&#x2605;</span>
          </div>
        );

        break;

      case 3:
        stars = (
          <div>
            <span>&#x2605;</span>
            <span>&#x2605;</span>
            <span>&#x2605;</span>
          </div>
        );
        break;

      case 4:
        stars = (
          <div>
            <span>&#x2605;</span>
            <span>&#x2605;</span>
            <span>&#x2605;</span>
            <span>&#x2605;</span>
          </div>
        );
        break;

      case 5:
        stars = (
          <div>
            <span>&#x2605;</span>
            <span>&#x2605;</span>
            <span>&#x2605;</span>
            <span>&#x2605;</span>
            <span>&#x2605;</span>
          </div>
        );
        break;

      default:
        stars = (
          <div>
            <p  className="NA">No reviews</p>
          </div>
        )
    }

    return (
      stars
    )
  }

  renderPrice() {
    const avgPrice = Math.round(this.context.selectedVenue.avgPrice);
    let price;

    switch (avgPrice) {
      case 1:
        price =
          (<span>&#36;</span>);
        break;
      case 2:
        price = (
          <div>
            <span>&#36;</span>
            <span>&#36;</span>
          </div>
        );

        break;

      case 3:
        price = (
          <div>
            <span>&#36;</span>
            <span>&#36;</span>
            <span>&#36;</span>
          </div>
        );
        break;

      case 4:
        price = (
          <div>
            <span>&#36;</span>
            <span>&#36;</span>
            <span>&#36;</span>
            <span>&#36;</span>
          </div>
        );
        break;

      case 5:
        price = (
          <div>
            <span>&#36;</span>
            <span>&#36;</span>
            <span>&#36;</span>
            <span>&#36;</span>
            <span>&#36;</span>
          </div>
        );
        break;

      default:
        price = (
          <div>
            <p className="NA">Price unavailable</p>
          </div>
        )
    }

    return (
      price
    )
  }


    
  renderVolume() {
    const reviewVolume = Math.round(this.context.selectedVenue.avgVolume);
    let volume;

    switch (reviewVolume) {
      case 1:
         volume = 
          (<span role="img" aria-label="volume level">&#128227;</span>);
        break;
      case 2:
        volume = (
          <div>
            <span role="img" aria-label="volume level">&#128227;</span>
            <span role="img" aria-label="volume level">&#128227;</span>
          </div>
        );

        break;

      case 3:
        volume = (
          <div>
            <span role="img" aria-label="volume level">&#128227;</span>
            <span role="img" aria-label="volume level">&#128227;</span>
            <span role="img" aria-label="volume level">&#128227;</span>
          </div>
        );
        break;

      case 4:
        volume = (
          <div>
            <span role="img" aria-label="volume level">&#128227;</span>
            <span role="img" aria-label="volume level">&#128227;</span>
            <span role="img" aria-label="volume level">&#128227;</span>
            <span role="img" aria-label="volume level">&#128227;</span>
          </div>
        );
        break;

      case 5:
        volume = (
          <div>
            <span role="img" aria-label="volume level">&#128227;</span>
            <span role="img" aria-label="volume level">&#128227;</span>
            <span role="img" aria-label="volume level">&#128227;</span>
            <span role="img" aria-label="volume level">&#128227;</span>
            <span role="img" aria-label="volume level">&#128227;</span>
          </div>
        );
        break;

      default:
        volume = (
            <p className="NA">volume unavailable</p>
        )
    }

    return (
      volume
    )
  }




  renderAmenities() {
    let { amenities } = this.context
    let list = amenities.map((amenity, index) => {
      return <li key={index}>{amenity.amenity_name}</li>
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
        <div className="contact">
          <p>Type: {venue.venue_type}</p>
          <p>{venue.address}</p>
          <span>{venue.city}</span>, <span>{venue.state}</span>{' '}
          <span>{venue.zipcode}</span>
          <p>{venue.phone}</p>
          <p>{venue.url}</p>
          </div>
        <div className='ratings'>
          <div className="average">
            Overall Rating: <span className="rating">{this.renderRating()}</span>
          </div>
          <div className="average">
            Overall Price: <span className="price">{this.renderPrice()}</span>
          </div>
          <div className="average">
            Overall Volume Level: <span className="volume">{this.renderVolume()}</span>
          </div>
          <div className="amenities">
            <h3>Features</h3>
            {this.renderAmenities()}  
          </div>
        </div>
        <div className="venue_controls">
          <Link to={`/addreview/${venue.id}`}>
            <button>Add a review</button>
          </Link>
          <button onClick={() => { this.handleAddFavorite(venue.id) }} >
            Add to Favorites
        </button>
        </div>
      </section>
    );
  }
}
