import React from 'react';
import Votes from '../Votes/votes';
import VenueContext from '../VenuesContext'

export default class Review extends React.Component {
  static contextType = VenueContext;


  render() {
    let {reviews} = this.props
    return (
      
        <li key={reviews.id}>
          <h4>Title</h4>
          <p>User_name</p>
          <p>{reviews.date_created}</p>
          <div>
            <p>{reviews.content}</p>
          </div>
          <Votes></Votes>
        </li>
    );
  }
}


