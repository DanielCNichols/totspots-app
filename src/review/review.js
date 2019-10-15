import React from 'react';
import Votes from '../Votes/votes';

export default class Review extends React.Component {
  render() {
    return (
      <div className='review'>
        {/* In here, map over the reviews for the venue and call votes for each one.  */}
        <li key={Review.id}>
          <h4>Title</h4>
          <p>User_name</p>
          <p>{Review.date_created}</p>
          <div>
            <p>{Review.content}</p>
          </div>
          <vote></vote>
        </li>
        <h4>One of the Bull City's Best!</h4>
        <p>Kelley Breeze - SuperUser</p>
        <p>Date visited: 1/28/2014</p>
      </div>
    );
  }
}


