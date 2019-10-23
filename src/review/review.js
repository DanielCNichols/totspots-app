import React from 'react';
import Votes from '../Votes/votes';
import VenueContext from '../VenuesContext'
import moment from 'moment';
import './review.css'
import { userInfo } from 'os';

export default class Review extends React.Component {
  static contextType = VenueContext;


  renderRating() {
    const rating = Math.round(this.props.reviews.starrating);
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
    const reviewPrice = Math.round(this.props.reviews.price);
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
            <p>Price unavailable</p>
        )
    }

    return (
      price
    )
  }



  
  renderVolume() {
    const reviewVolume = Math.round(this.props.reviews.volume);
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




  render() {
    let {reviews} = this.props
    return (
        <li className="reviewItem" key={reviews.id}>
          <h3>{reviews.first_name} {reviews.last_name}</h3>
          <p>Visited: {moment(reviews.date_created).format('MMMM Do, YYYY')}</p>
          <div className="rating_break">
            <div className="userRating">
            Overall: <span className="rating">{this.renderRating()}</span>
            </div>
            <div className="userRating">
              Price: <span className="price">{this.renderPrice()}</span>
            </div>
            <div className="userRating">
            Volume Level: <span className="volume">{this.renderVolume()}</span>
            </div>
          </div>
          <div className="userReview">
            <p>{reviews.first_name} said: </p>
            <p>{reviews.content}</p>
          </div>
          <Votes review={reviews}></Votes>
        </li>
    );
  }
}


