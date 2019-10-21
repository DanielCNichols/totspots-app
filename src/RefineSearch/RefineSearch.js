import React from 'react';
import VenuesContext from '../VenuesContext';

export default class RefineSearch extends React.Component {
  // static contextType = VenuesContext;

  // handleSort =ev => {
  //   ev.preventDefault();
  //   let venues = this.context.venues
  //   let value = ev.target.sort.value
  //   if (value === 'price' || value === 'avgVolume') {
  //    console.log(venues.sort((a, b) => a.avgPrice - b.avgPrice));
  //   }
  //   if (value === 'rating') {
  //     this.context.setVenues(this.context.venues.sort((a, b) => b.value - a.value))
  //   }
  // }

  render() {
    return( 
      <div></div>
  //     <form  onSubmit={this.handleSort}>
  //       <label> htmlFor="sort">Sort by
  //       <select name='sort'>
  //         <option>Select</option>
  //         <option value='avgPrice'>Price (low to high)</option>
  //         <option value='avgRating'>Rating(high to low)</option>
  //         <option value='avgVolume'>Volume Level (low to high)</option>
  //       </select>
  //       <button type='submit'>Sort</button>
  //       </label>
  //     </form>
    )
  }
}
  
