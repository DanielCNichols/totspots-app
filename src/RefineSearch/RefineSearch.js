import React from 'react';
import VenuesContext from '../VenuesContext';

export default class RefineSearch extends React.Component {
  static contextType = VenuesContext;

  handleSort =ev => {
    ev.preventDefault();
    let venues = [...this.context.venues]
    let value = ev.target.sort.value
    if(value) {
      // if (value === 'avgPrice' || value === 'avgVolume') {
       this.context.setVenues(venues.sort((a, b) => b[`${value}`] - a[`${value}`]))
      // } else if (value === 'avgRating') {
        // this.context.setVenues(venues.sort((a, b) => b[`${value}`] - a[`${value}`]))
      }
    // }
  }

  render() {
    return( 
      <form  onSubmit={this.handleSort}>
        <label htmlFor="sort">Sort by
        <select name='sort'>
          <option>Select</option>
          <option value='avgPrice'>Price (low to high)</option>
          <option value='avgRating'>Rating(high to low)</option>
          <option value='avgVolume'>Volume Level (low to high)</option>
        </select>
        <button type='submit'>Sort</button>
        </label>
      </form>
    )
  }
}
  
