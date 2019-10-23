import React, { Component } from 'react';
import PropTypes from 'prop-types';
import VenuesContext from '../VenuesContext';
import config from '../config';
import ApiService from '../services/api-service';
import './editReview.css'

const Required = () => <span className='EditBookmark__required'>*</span>;

class editReview extends Component {
  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.object
    }),
    history: PropTypes.shape({
      push: PropTypes.func
    }).isRequired
  };

  static contextType = VenuesContext;

  state = {
    error: null,
    id: '',
    venue_id: '',
    content: '',
    price: '',
    volume: '',
    starrating: 1,
    user_id: ''
  };

  componentDidMount() {
    const reviewId = this.props.match.params.review_id;
    ApiService.getReview(reviewId).then(responseData => {
      this.setState({
        id: responseData.id,
        venue_id: responseData.venue_id,
        content: responseData.content,
        price: responseData.price,
        volume: responseData.volume,
        starrating: responseData.starrating
      });
    });
  }

  handleChangeContent = e => {
    this.setState({ content: e.target.value });
  };

  handleChangePrice = e => {
    this.setState({ price: e.target.value });
  };

  handleChangeVolume = e => {
    this.setState({ volume: e.target.value });
  };

  handleChangeRating = e => {
    this.setState({ starrating: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    // const { reviewId } = this.props.match.params;
    const { id, venue_id, content, price, volume, starrating } = this.state;
    const newReview = { id, venue_id, content, price, volume, starrating };
    ApiService.editReview(id, newReview)
      .then(() => {
        this.resetFields(newReview);
        this.context.updateReview(newReview);
        this.props.history.goBack();
      })
      .catch(error => {
        console.error(error);
        this.setState({ error });
      });
  };

  resetFields = newReview => {
    this.setState({
      id: newReview.id || '',
      venue_id: newReview.title || '',
      content: newReview.url || '',
      price: newReview.description || '',
      volume: newReview.rating || '',
      starrating: newReview.starrating || ''
    });
  };

  handleClickCancel = () => {
    this.props.history.push('/');
  };

  render() {
    const {
      error,
      content,
      price,
      volume,
      starrating
    } = this.state;
    return (
      <section>
        <header>
          <h3>Edit Review</h3>
        </header>
        <form className="edit_form" onSubmit={this.handleSubmit}>
          <fieldset>
              <label className="edit_form_label" htmlFor='price'>
                Price
                <select
                value= {price}
                className="edit_form_select"
                  name='price'
                  id='price'
                  onChange={this.handleChangePrice}
                >
                  <option value=''>Please select</option>
                  <option value='1'>$</option>
                  <option value='2'>$$</option>
                  <option value='3'>$$$</option>
                  <option value='4'>$$$$</option>
                  <option value='5'>$$$$$</option>
                </select>
              </label>
              <label 
              className="edit_form_label"
              htmlFor='volume'>
                Volume Level
                <select
                value = {volume}
                 className="edit_form_select"
                  name='volume'
                  id='volume'
                  onChange={this.handleChangeVolume}
                >
                  <option value=''>Please select</option>
                  <option value='1'>Library</option>
                  <option value='2'>Coffee Shop</option>
                  <option value='3'>Restaurant</option>
                  <option value='4'>Bar/Brewery</option>
                  <option value='5'>Concert</option>
                </select>
              </label>
              <label 
              className="edit_form_label"
              htmlFor='rating'>
                Overall rating
                <select
                value = {starrating}
                  className="edit_form_select"
                  name='rating'
                  id='rating'
                  onChange={this.handleChangeRating}
                >
                  <option value=''>Please select</option>
                  <option value='1'>&#x2605;</option>
                  <option value='2'>&#x2605; &#x2605;</option>
                  <option value='3'>&#x2605; &#x2605; &#x2605;</option>
                  <option value='4'>&#x2605; &#x2605; &#x2605; &#x2605;</option>
                  <option value='5'>
                    &#x2605; &#x2605; &#x2605; &#x2605; &#x2605;
                  </option>
                </select>
              </label>
          </fieldset>
          <div className='review'>
            <label 
            className="edit_form_label"
            htmlFor='review'>
              What's changed at this spot? 
              <textarea
              className="edit_form_text"
                type='text'
                name='content'
                value={content}
                placeholder='Tell us about your visit'
                onChange={this.handleChangeContent}
              />
            </label>
          </div>
          <div className="edit_form_controls">
            <button className="edit_form_button" type='submit'>Submit</button>
            <button className="edit_form_cancel" onClick={this.handleClickCancel}>Cancel</button>
          </div>
        </form>
      </section>
    );
  }
}
export default editReview;
