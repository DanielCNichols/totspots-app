import React from 'react';
import VenueContext from '../VenuesContext'
import moment from 'moment';

export default class UserReview extends React.Component {
  static contextType = VenueContext;

  render() {
    let {userReviews} = this.props
    console.log(userReviews)
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
          <button>DeleteReview</button>
        </li>
    );
  }
}


