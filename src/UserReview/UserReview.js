import React from 'react';
import VenueContext from '../VenuesContext'
import moment from 'moment';
import ApiService from '../services/api-service';

export default class UserReview extends React.Component {
  static contextType = VenueContext;

  deleteReviewRequest(reviewId, callback) {
    console.log('deleting review')
    ApiService.deleteReview(reviewId)
    .then((reviews) => {
      callback(reviewId);
    })
    .catch((error) => {
      console.error(error);
    });
  }

  render() {
    let {userReviews} = this.props
    return (
        <li key={userReviews.id}>
          <h4>{userReviews.venue_name}</h4>
          <p>Visited {moment(userReviews.date_created).format('MMMM Do YYY')}</p>
          <div>
          <p>Your Rating: {Math.round(userReviews.starrating)}/5</p>
          <p>Your Price: {Math.round(userReviews.price)}/5</p>
          <p>Your Volume Level: {Math.round(userReviews.volume)}/5</p>
          <p>Here's what you had to say</p>
            <p>{userReviews.content}</p>
          </div>
          <button>Edit Review</button>
          <button onClick={()=> this.deleteReviewRequest(userReviews.id, this.context.deleteReview)}>DeleteReview</button>
        </li>
    );
  }
}


