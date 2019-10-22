import React, { Component } from 'react';
import PropTypes from 'prop-types';
import VenuesContext from '../VenuesContext';
import config from '../config';
import ApiService from '../services/api-service';

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
        starrating: responseData.starrating,
        user_id: responseData.user_id
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
    const { reviewId } = this.props.match.params;
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
    const {error, id, venue_id, content, price, volume, starrating } = this.state
    return (
      <section>
        <header>
          <h3>Edit Review</h3>
        </header>
        <form onSubmit={this.handleSubmit}>
          <fieldset>
            <legend>
              <label htmlFor='price'>
                price
                <select name='price' id='price' onChange={this.handleChangePrice}>
                  <option value=''>Please select</option>
                  <option value='1'>$</option>
                  <option value='2'>$$</option>
                  <option value='3'>$$$</option>
                  <option value='4'>$$$$</option>
                  <option value='5'>$$$$$</option>
                </select>
              </label>
              <label htmlFor='volume'>
                volume Level
                <select name='volume' id='volume' onChange={this.handleChangeVolume}>
                  <option value=''>Please select</option>
                  <option value='1'>Library</option>
                  <option value='2'>Coffee Shop</option>
                  <option value='3'>Restaurant</option>
                  <option value='4'>Bar/Brewery</option>
                  <option value='5'>Concert</option>
                </select>
              </label>
              <label htmlFor='rating'>
                Overall rating
                <select name='rating' id='rating' onChange={this.handleChangeRating}>
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
            </legend>
          </fieldset>
          <div className='review'>
            <label htmlFor='review'>
              Write your review
              <input
                type='text'
                name='content'
                value = {content}
                placeholder='Tell us about your visit'
                onChange={this.handleChangeContent}
              />
            </label>
          </div>
          <button type='submit'>Submit</button>
          <button onClick={this.handleClickCancel}>Cancel</button>
        </form>
      </section>
      //           className='EditBookmark__form'
      //           onSubmit={this.handleSubmit}
      //         >
      //           <div className='EditBookmark__error' role='alert'>
      //             {error && <p>{error.message}</p>}
      //           </div>
      //           <input
      //             type='hidden'
      //             name='id'
      //           />
      //           <div>
      //             <label htmlFor='title'>
      //               Title
      //               {' '}
      //               <Required />
      //             </label>
      //             <input
      //               type='text'
      //               name='title'
      //               id='title'
      //               placeholder='Great website!'
      //               required
      //               value={title}
      //               onChange={this.handleChangeTitle}
      //             />
      //           </div>
      //           <div>
      //             <label htmlFor='url'>
      //               URL
      //               {' '}
      //               <Required />
      //             </label>
      //             <input
      //               type='url'
      //               name='url'
      //               id='url'
      //               placeholder='https://www.great-website.com/'
      //               required
      //               value={url}
      //               onChange={this.handleChangeUrl}
      //             />
      //           </div>
      //           <div>
      //             <label htmlFor='description'>
      //               Description
      //             </label>
      //             <textarea
      //               name='description'
      //               id='description'
      //               value={description}
      //               onChange={this.handleChangeDescription}
      //             />
      //           </div>
      //           <div>
      //             <label htmlFor='rating'>
      //               Rating
      //               {' '}
      //               <Required />
      //             </label>
      //             <input
      //               type='number'
      //               name='rating'
      //               id='rating'
      //               min='1'
      //               max='5'
      //               required
      //               value={rating}
      //               onChange={this.handleChangeRating}
      //             />
      //           </div>
      //           <div className='EditBookmark__buttons'>
      //             <button type='button' onClick={this.handleClickCancel}>
      //               Cancel
      //             </button>
      //             {' '}
      //             <button type='submit'>
      //               Save
      //             </button>
      //           </div>
      //         </form>
      //       </section>
    );
  }
}
export default editReview;
