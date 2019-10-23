import React, { Component } from 'react';
import VenuesContext from '../VenuesContext';
import Review from '../Review/Review'
import VenueProfile from '../VenueProfile/VenueProfile'
import './VenuesPage.css'

export default class VenuesPage extends Component {
  static contextType = VenuesContext;
 
  prerender() {
    let {reviews} =this.context;
    if (reviews.length === 0) {
      return (
        <div>
          <p>Be the first to review this venue!</p>
        </div>
      )
    } else {
      return (
        <ul>
        {reviews.map((reviews =>(
            <Review reviews={reviews} key={reviews.id} />
        )))}
    </ul>
      )
    }
  }

  render() {
    return (
      <section className="VenuesPage">
        <VenueProfile>

        </VenueProfile>
        <header>
          <h3>Here's what people are saying: </h3>
        </header>
        {this.prerender()}
      </section>
    );
  }
}
