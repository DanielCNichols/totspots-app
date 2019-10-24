import React from 'react';
import VenueContext from '../VenuesContext'
import moment from 'moment';
import ApiService from '../services/api-service';
import { Link } from 'react-router-dom'
import './UserReview.css'

export default class UserReview extends React.Component {
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
            <p>No reviews</p>
          </div>
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
            <p>Price unavailable</p>
          </div>
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




  deleteReviewRequest(reviewId, callback) {
    console.log('deleting review')
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
        <p>Visited {moment(userReviews.date_created).format('MMMM Do YYY')}</p>
        <div className='rating_info'>
        <div className="user_rating">
          Your Rating: <span className="rating">{this.renderRating()}</span>
        </div>
        <div className="user_rating">
          Your Price: <span className="price">{this.renderPrice()}</span>
        </div>
        <div className="user_rating">
          Your Volume Level: <span className='volume'>{this.renderVolume()}</span>
        </div>
        </div>
        <div className="user_content">
          <p>Here's what you had to say</p>
          <p>{userReviews.content}</p>
        </div>
        <div className="userReview_controls">
          <Link to={`reviews/${userReviews.id}`}><button className="edit">Edit Review</button></Link>
          <button className="delete" onClick={() => this.deleteReviewRequest(userReviews.id, this.context.deleteReview)}>Delete Review</button>
        </div>
      </li>
    );
  }
}


