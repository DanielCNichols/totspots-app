import React, { Component } from 'react';
import VenuesContext from '../VenuesContext';
import Review from '../review/review'
import { Link } from 'react-router-dom';

export default class VenuesPage extends Component {
  static contextType = VenuesContext;
 
  render() {
    let {reviews} =this.props
    return (
      <section>
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
