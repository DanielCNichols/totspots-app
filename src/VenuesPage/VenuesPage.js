import React, { Component } from 'react';
import VenuesContext from '../VenuesContext';
import Review from '../review/review'
import VenueProfile from '../VenueProfile/VenueProfile'
import './VenuesPage.css'

export default class VenuesPage extends Component {
  static contextType = VenuesContext;
 
  //hackish solution to getting the venueid. 
  //How to be sure that the venue review form is targeting the appropriate venue? 
  render() {
    let {reviews} =this.context
    return (
      <section className="VenuesPage">
        <VenueProfile>

        </VenueProfile>
        <header>
          <h3>Here's what people are saying: </h3>
        </header>
        <ul>
          {reviews.map((reviews =>(
              <Review reviews={reviews} key={reviews.id} />
          )))}
      </ul>
      </section>
    );
  }
}
