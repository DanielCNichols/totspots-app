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
          <h4>Title</h4>
          <p>User_name</p>
          <p>{moment(reviews.date_created).format('MMMM Do YYY, h:mm a')}</p>
          <div>
            <p>{reviews.content}</p>
          </div>
          <Votes review={reviews}></Votes>
        </li>
    );
  }
}


