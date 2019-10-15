import React from 'react';
import VenuesContext from '../VenuesContext';

export default class RefineSearch extends React.Component {
  static contextType = VenuesContext;

  //Make a filter and sort function that calls to the server. 

  render() {
    return (
      <section className='filter-search'>
        {/* clicking here should show the refine search button. */}
        <button>Refine search</button>
        <form action=''>
          <label htmlFor='Filter'>
            Filter results by:
            <select name='filter' id='filter'>
              <option value=''>Select</option>
              <option value='type'>type</option>
              <option value=''>Minimum Rating</option>
              <option value=''>Amenities</option>
            </select>
          </label>
          <button>Search</button>
          <button>Cancel</button>
        </form>
      </section>
    );
  }
}
