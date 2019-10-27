import React from 'react';
import VenueContext from '../VenuesContext'
import moment from 'moment';
import ApiService from '../services/api-service';
import {withRouter} from 'react-router-dom'
import './UserReview.css'

class UserReview extends React.Component {
  static contextType = VenueContext;


  renderRating() {
    const rating = Math.round(this.props.userReviews.starrating);
    let stars;

    switch (rating) {
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
            <span className="NA">No reviews</span>
          </>
        )
    }

    return (
      stars
    )
  }

  renderPrice() {
    const reviewPrice = Math.round(this.props.userReviews.price);
    let price;

    switch (reviewPrice) {
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
    const reviewVolume = Math.round(this.props.userReviews.volume);
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
          Your Rating: <span className="rating">{this.renderRating()}</span>
        </div>
        <div className="user_rating">
          Your Price: <span className="price">{this.renderPrice()}</span>
        </div>
        <div className="user_rating">
          Your Volume Level: <span className="volume">{this.renderVolume()}</span>
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


