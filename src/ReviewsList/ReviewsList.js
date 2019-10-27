import React, { Component } from 'react';
import venuesContext from '../VenuesContext';
import ApiService from '../services/api-service';
import UserReview from '../UserReview/UserReview';
import './ReviewsList.css';

export default class ReviewsList extends Component {
  static contextType = venuesContext;

  componentDidMount() {
    ApiService.getUserReviews()
      .then(reviews => {
        this.context.setUserReviews(reviews);
      })
      .catch(this.context.setError);
  }

  prerender() {
    let { userReviews } = this.context;
    if (userReviews.length === 0) {
      return (
        <div>
          <p>Looks like you haven't posted any reviews... yet!</p>
        </div>
      );
    } else {
      return (
        <section className="reviewslist">
          <header>
            <h3>Your Reviews</h3>
          </header>
          <div>
            <ul>
              {userReviews.map(userReviews => (
                <UserReview userReviews={userReviews} key={userReviews.id} />
              ))}
            </ul>
          </div>
        </section>
      );
    }
  }

  render() {
    return <div>{this.prerender()}</div>;
  }
}
