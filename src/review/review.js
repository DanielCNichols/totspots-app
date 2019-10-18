import React from 'react';
import Votes from '../Votes/votes';
import VenueContext from '../VenuesContext'
import moment from 'moment';

export default class Review extends React.Component {
  static contextType = VenueContext;


  render() {
    let {reviews} = this.props
    return (
        <li key={reviews.id}>
          <h4></h4>
          <p>{moment(reviews.date_created).format('MMMM Do YYY, h:mm a')}</p>
          <p>{reviews.first_name} said: </p>
          <div>
          <p>Overall: {Math.round(reviews.starrating)}/5</p>
          <p>Price: {Math.round(reviews.price)}/5</p>
          <p>Volume Level: {Math.round(reviews.volume)}/5</p>
            <p>{reviews.content}</p>
          </div>
          <Votes review={reviews}></Votes>
        </li>
    );
  }
}


