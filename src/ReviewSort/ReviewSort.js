import React from 'react';
import VenuesContext from '../VenuesContext';
import './ReviewSort.css'

export default class ReviewSort extends React.Component {
  static contextType = VenuesContext;

  handleSort = ev => {
    ev.preventDefault();
    let reviews = [...this.context.reviews];
    let value = ev.target.sort.value;
    if (value) {
      if (value === 'ascending') {
        this.context.setReviews(
          reviews.sort((a, b) => a.count - b.count)
        );
      } else if (value === 'descending') {
        this.context.setReviews(
          reviews.sort((a, b) => b.count - a.count)
        );
      }
    }
  };

  render() {
    return (
      <form className="review_sort_form" onSubmit={this.handleSort}>
        <label className="review_sort_form_label" htmlFor="sort">
          Sort reviews by:
          <select className="review_sort_form_select" name="sort">
            <option>Select</option>
            <option value="ascending">Least liked</option>
            <option value="descending">Most liked</option>
          </select>
          <button className="review_sort_form_button" type="submit">Sort</button>
        </label>
      </form>
    );
  }
}
