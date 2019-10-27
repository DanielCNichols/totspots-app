import React from 'react';
import VenueContext from '../VenuesContext';
import ApiService from '../services/api-service';
import { withRouter } from 'react-router-dom';
import './Result.css';

class Result extends React.Component {
  static contextType = VenueContext;

  handleExpanded(venueId) {
    ApiService.getReviews(venueId).then(reviews => {
      this.context.setReviews(reviews);
    });
    ApiService.getAmenities(venueId)
      .then(amenities => {
        this.context.setAmenities(amenities);
      })
      .catch(this.context.setError);
    this.context.setSelectedVenue(venueId);
    this.props.history.push(`/venue/${venueId}`);
  }

  renderRating() {
    const avgRating = Math.round(this.props.venue.avgRating);
    let stars;

    switch (avgRating) {
      case 1:
        stars =
        ( <span>&#x2605;</span>);
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
            <p className="NA">No reviews</p>
          </>
        )
    }

    return (
      stars
    )
  }

  renderPrice() {
    const avgPrice = Math.round(this.props.venue.avgPrice);
    let price;

    switch (avgPrice) {
      case 1:
        price =
        ( <span>&#36;</span>);
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
        price= (
          <>
            <span className="NA">Price unavailable</span>
          </>
        )
    }

    return (
      price
    )
  }

  render() {
    let { venue } = this.props;
    return (
      <li
        className="result"
        key={venue.id}
        onClick={() => this.handleExpanded(venue.id)}
      >
        <div className="result_rating">
          <h3>{venue.venue_name}</h3>
          <span className="rating">{this.renderRating()}</span>
        </div>
        <p className="price">{this.renderPrice()}</p>
        <span>{venue.address}</span> <span className="city">{venue.city}</span>,
        <span className="state">{venue.state}</span>
        <button onClick={() => this.handleExpanded(venue.id)}>See more</button>
      </li>
    );
  }
}

export default withRouter(Result);
