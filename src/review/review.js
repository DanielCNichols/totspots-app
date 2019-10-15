import React from 'react';
import Votes from '../Votes/votes'


export default function Review() {

  return (
    <div className="review">
      {/* In here, map over the reviews for the venue and call votes for each one.  */}
      <Votes></Votes>
          <h4>One of the Bull City's Best!</h4>
          <p>Kelley Breeze - SuperUser</p>
          <p>Date visited: 1/28/2014</p>
          <div className="reviewText">
          <p>We love Bull McCabes! This was a favorite before we had our little one and I can recommend it highly enough! We go every friday with some friends from work who also have kids, and it is always easy to get in and out of. They also have changing tables and the staff is super friendly (and quick!). They have a great outdoor area with a big connect-four game and a big fenced-in area for kids to play in, while still within sight of parents. Best way to wrap up a work week!</p>
          </div>
     </div>
  )
}