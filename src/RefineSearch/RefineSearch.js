import React from 'react';
import VenuesContext from '../VenuesContext';
import './RefineSearch.css'

export default class RefineSearch extends React.Component {
  static contextType = VenuesContext;

  handleSort = ev => {
    ev.preventDefault();
    let venues = [...this.context.venues];
    let value = ev.target.sort.value;
    if (value) {
      if (value === 'avgPrice' || value === 'avgVolume') {
        this.context.setVenues(
          venues.sort((a, b) => a[`${value}`] - b[`${value}`])
        );
      } else if (value === 'avgRating') {
        this.context.setVenues(
          venues.sort((a, b) => b[`${value}`] - a[`${value}`])
        );
      }
    }
  };

  render() {
    return (
      <form className="refine_form" onSubmit={this.handleSort}>
        <label className="refine_form_label" htmlFor="sort">
          Sort results by:
          <select className="refine_form_select" name="sort">
            <option>Select</option>
            <option value="avgPrice">Price (low to high)</option>
            <option value="avgRating">Rating(high to low)</option>
            <option value="avgVolume">Volume Level (low to high)</option>
          </select>
          <button className="refine_form_button" type="submit">Sort</button>
        </label>
      </form>
    );
  }
}
