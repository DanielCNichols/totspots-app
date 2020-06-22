import React, { Component } from 'react';
import VenuesContext from '../VenuesContext';
import Review from '../review/review';
import VenueProfile from '../VenueProfile/VenueProfile';
import './VenuesPage.css';
import ApiService from '../services/api-service';

export default class VenuesPage extends Component {
  static contextType = VenuesContext;

  componentDidMount() {
    this.context.clearError();
    let venueId = this.props.match.params.venue_id;
    ApiService.getVenueProfile(venueId)
      .then((venue) => {
        this.context.setSelectedVenue(venue);
      })
      .then(() => {
        ApiService.getReviews(venueId)
          .then((reviews) => {
            this.context.setReviews(reviews);
          })
          .then(() => {
            ApiService.getAmenities(venueId).then((amenities) => {
              this.context.setAmenities(amenities);
            });
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
          {reviews.map((reviews) => (
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
