import React from 'react';
import VenueContext from '../VenuesContext'
import moment from 'moment';
import ApiService from '../services/api-service';
import {withRouter} from 'react-router-dom'
import './UserReview.css'
import Rating from '../Rating/Rating'

class UserReview extends React.Component {
  static contextType = VenueContext;

  handleEditClick(id) {
    this.props.history.push(`/reviews/${id}`)
  }

  deleteReviewRequest(reviewId, callback) {
    ApiService.deleteReview(reviewId)
      .then(() => {
        callback(reviewId);
      })
      .catch((this.context.setError))
  }

  render() {
    let { userReviews } = this.props
    return (
      <li className="userReviewItem" key={userReviews.id}>
        <h4>{userReviews.venue_name}</h4>
        <p>Visited {moment(userReviews.date_created).format("MMMM Do, YYYY")}</p>
        <div className="rating_info">
        <div className="user_rating">
          Your Rating: <span className="rating"><Rating value={userReviews.starrating} symbol="&#x2605;"/></span>
        </div>
        <div className="user_rating">
          Your Price: <span className="price"><Rating value={userReviews.price} symbol="&#36;"/></span>
        </div>
        <div className="user_rating">
          Your Volume Level: <span className="volume"><Rating value={userReviews.volume} symbol="&#128227;"/></span>
        </div>
        </div>
        <div className="user_content">
          <p>Here's what you had to say</p>
          <p>{userReviews.content}</p>
        </div>
        <div className="userReview_controls">
          <button onClick={() => {this.handleEditClick(userReviews.id)}} className="edit">Edit Review</button>
          <button className="delete" onClick={() => this.deleteReviewRequest(userReviews.id, this.context.deleteReview)}>Delete Review</button>
        </div>
      </li>
    );
  }
}


export default withRouter(UserReview)


