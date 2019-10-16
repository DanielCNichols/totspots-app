import React, { Component } from 'react';
import VenuesContext from '../VenuesContext';
import Review from '../review/review'
import { Link } from 'react-router-dom';
import VenueProfile from '../VenueProfile/VenueProfile'

export default class VenuesPage extends Component {
  static contextType = VenuesContext;
 
  //hackish solution to getting the venueid. 
  //How to be sure that the venue review form is targeting the appropriate venue? 
  render() {
    let {reviews} =this.context
    return (
      <section>
        <VenueProfile></VenueProfile>
          
         
          <Link to={`/addReview/${reviews.venue_id}`}><button>Add a review</button></Link>
        {/* <VenueProfile>

        </VenueProfile> */}
        <ul>
          {reviews.map((reviews =>(
              <Review reviews={reviews} key={reviews.id} />
          )))}
      </ul>
      </section>
    );
  }
}
