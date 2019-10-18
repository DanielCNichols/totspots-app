import React from 'react';
import VenuesContext from '../VenuesContext';

export default class RefineSearch extends React.Component {
  static contextType = VenuesContext;

  //



  render() {
    return(
      <form>
        <select>
          <option value='price'></option>
          <option value='rating'></option>
          <option value='volume'></option>
        </select>
        <button type='submit'></button>
      </form>
    )
  }
}
  
