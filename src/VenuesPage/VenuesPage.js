import React, { Component } from 'react';
import VenuesContext from '../VenuesContext';
import Review from '../Review/Review';
import VenueProfile from '../VenueProfile/VenueProfile';
import './VenuesPage.css';
import ApiService from '../services/api-service';

export default class VenuesPage extends Component {
  static contextType = VenuesContext;

  componentDidMount() {
    let venue = this.context.selectedVenue;
    this.context.clearError();
    ApiService.getReviews(venue.id)
      .then(reviews => {
        this.context.setReviews(reviews);
      })
      .then(() => {
        ApiService.getAmenities(venue.id).then(amenities => {
          this.context.setAmenities(amenities);
        });
      })
      .catch(this.context.setError);
  }

  prerender() {
    let { reviews } = this.context;
    if (reviews.length === 0) {
      return (
        <div>
          <p>Be the first to review this venue!</p>
        </div>
      );
    } else {
      return (
        <ul>
          {reviews.map(reviews => (
            <Review reviews={reviews} key={reviews.id} />
          ))}
        </ul>
      );
    }
  }

  render() {
    return (
      <section className='VenuesPage'>
        <VenueProfile></VenueProfile>
        <header>
          <h3>Here's what people are saying: </h3>
        </header>
        {this.prerender()}
      </section>
    );
  }
}
