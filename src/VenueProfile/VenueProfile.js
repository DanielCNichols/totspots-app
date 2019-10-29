import React, { Component } from 'react';
import VenuesContext from '../VenuesContext';
import ApiService from '../services/api-service';
import PropTypes from 'prop-types'
import {withRouter} from 'react-router-dom'
import './VenueProfile.css'
import TokenService from '../services/TokenService'

 class VenueProfile extends Component {

  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.object
    }),
  };

  static contextType = VenuesContext;



  handleAddFavorite(venueId) {
    if(!TokenService.hasToken()) {
      this.props.history.push('/login')
    } else{
    ApiService.addFavorite(venueId)
    .catch(this.context.setError);
    }
  }

  handleAddReview(venueId) {
    this.props.history.push('/addreview/venueId');
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
          <>
            <span>&#x2605;</span>
            <span>&#x2605;</span>
          </>
        );

        break;

      case 3:
        stars = (
          <>
            <span>&#x2605;</span>
            <span>&#x2605;</span>
            <span>&#x2605;</span>
          </>
        );
        break;

      case 4:
        stars = (
          <>
            <span>&#x2605;</span>
            <span>&#x2605;</span>
            <span>&#x2605;</span>
            <span>&#x2605;</span>
          </>
        );
        break;

      case 5:
        stars = (
          <>
            <span>&#x2605;</span>
            <span>&#x2605;</span>
            <span>&#x2605;</span>
            <span>&#x2605;</span>
            <span>&#x2605;</span>
          </>
        );
        break;

      default:
        stars = (
          <>
            <span  className="NA">No reviews</span>
          </>
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
          <>
            <span>&#36;</span>
            <span>&#36;</span>
          </>
        );

        break;

      case 3:
        price = (
          <>
            <span>&#36;</span>
            <span>&#36;</span>
            <span>&#36;</span>
          </>
        );
        break;

      case 4:
        price = (
          <>
            <span>&#36;</span>
            <span>&#36;</span>
            <span>&#36;</span>
            <span>&#36;</span>
          </>
        );
        break;

      case 5:
        price = (
          <>
            <span>&#36;</span>
            <span>&#36;</span>
            <span>&#36;</span>
            <span>&#36;</span>
            <span>&#36;</span>
          </>
        );
        break;

      default:
        price = (
          <>
            <span className="NA">Price unavailable</span>
          </>
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
          <>
            <span role="img" aria-label="volume level">&#128227;</span>
            <span role="img" aria-label="volume level">&#128227;</span>
          </>
        );

        break;

      case 3:
        volume = (
          <>
            <span role="img" aria-label="volume level">&#128227;</span>
            <span role="img" aria-label="volume level">&#128227;</span>
            <span role="img" aria-label="volume level">&#128227;</span>
          </>
        );
        break;

      case 4:
        volume = (
          <>
            <span role="img" aria-label="volume level">&#128227;</span>
            <span role="img" aria-label="volume level">&#128227;</span>
            <span role="img" aria-label="volume level">&#128227;</span>
            <span role="img" aria-label="volume level">&#128227;</span>
          </>
        );
        break;

      case 5:
        volume = (
          <>
            <span role="img" aria-label="volume level">&#128227;</span>
            <span role="img" aria-label="volume level">&#128227;</span>
            <span role="img" aria-label="volume level">&#128227;</span>
            <span role="img" aria-label="volume level">&#128227;</span>
            <span role="img" aria-label="volume level">&#128227;</span>
          </>
        );
        break;

      default:
        volume = (
            <span className="NA">volume unavailable</span>
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
      <section className="venueProfile">
        <header>
          <h2>{venue.venue_name}</h2>
        </header>
        <div className="contact">
          <p className="type">Type: {venue.venue_type}</p>
          <p>{venue.address}</p>
          <span className="city">{venue.city}</span>, <span className="state">{venue.state}</span>
          <span>{venue.zipcode}</span>
          <p>{venue.phone}</p>
          <p>{venue.url}</p>
          </div>
        <div className="ratings">
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
          <button onClick={() => {this.handleAddReview(venue.id)}}>Add a review</button>
          <button onClick={() => {this.handleAddFavorite(venue.id)}} >
            Add to Saved Venues
        </button>
        </div>
      </section>
    );
  }
}


export default withRouter(VenueProfile)