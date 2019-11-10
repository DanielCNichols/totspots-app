import React from 'react';
import Votes from '../Votes/Votes';
import VenueContext from '../VenuesContext'
import moment from 'moment';
import './Review.css'
import Rating from '../Rating/Rating'

export default class Review extends React.Component {
  static contextType = VenueContext;

  render() {
    let {reviews} = this.props
    console.log(reviews)
    return (
        <li className="reviewItem" key={reviews.id}>
          <h3>{reviews.first_name} {reviews.last_name}</h3>
          <p>Visited: {moment(reviews.date_created).format('MMMM Do, YYYY')}</p>
          <div className="rating_break">
            <div className="userRating">
            Overall: <span className="rating"><Rating value={reviews.starrating} symbol="&#x2605;"/></span>
            </div>
            <div className="userRating">
              Price: <span className="price"><Rating value={reviews.price} symbol="&#36;"/></span>
            </div>
            <div className="userRating">
            Volume Level: <span className="volume"><Rating value={reviews.volume} symbol="&#128227;"/></span>
            </div>
          </div>
          <div className="userReview">
            <p>{reviews.first_name} said: </p>
            <p>{reviews.content}</p>
          </div>
          <Votes key={reviews.id} review={reviews}></Votes>
        </li>
    );
  }
}


