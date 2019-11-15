import React, { Component } from 'react';
import PropTypes from 'prop-types';
import VenuesContext from '../VenuesContext';
import ApiService from '../services/api-service';
import { withRouter } from 'react-router-dom';
import './editReview.css';
import ControlSelect from '../ControlSelect/ControlSelect'

class editReview extends Component {
  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.object,
    }),
    history: PropTypes.shape({
      push: PropTypes.func,
    }).isRequired,
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
    user_id: '',
  };

  componentDidMount() {
    const reviewId = this.props.match.params.review_id;
    ApiService.getReview(reviewId)
      .then(responseData => {
        this.setState({
          id: responseData.id,
          venue_id: responseData.venue_id,
          content: responseData.content,
          price: responseData.price,
          volume: responseData.volume,
          starrating: responseData.starrating,
        });
      })
      .catch(this.context.setError);
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
        this.context.setError(error);
      });
  };

  resetFields = newReview => {
    this.setState({
      id: newReview.id || '',
      venue_id: newReview.title || '',
      content: newReview.url || '',
      price: newReview.description || '',
      volume: newReview.rating || '',
      starrating: newReview.starrating || '',
    });
  };

  handleClickCancel = () => {
    this.props.history.push('/account');
  };

  renderError() {
    let error = this.context.error;
    if (this.context.error) {
      return (
        <div className="error">
          <p>Sorry something has gone wrong. {error.error}</p>
        </div>
      );
    }
  }

  render() {
    const { content, price, volume, starrating } = this.state;
    return (
      <section className="edit_section">
        <header>
          <h3>Edit Review</h3>
        </header>
        <div role="alert">{this.renderError()}</div>
        <form className="edit_form" onSubmit={this.handleSubmit}>
          <fieldset>
            <legend>
              <label className="edit_form_label" htmlFor="price">
                Price
                <ControlSelect
                  aria-label="price"
                  value={price}
                  className="edit_form_select"
                  name="price"
                  id="price"
                  option="&#36;"
                  choices={5}
                  onChange={this.handleChangePrice}
                />
              </label>
              <label className="edit_form_label" htmlFor="volume">
                Describe the volume level
                <ControlSelect
                  aria-label="Describe the volume level"
                  value={volume}
                  className="edit_form_select"
                  name="volume"
                  id="volume"
                  option="&#128227;"
                  choices={5}
                  onChange={this.handleChangeVolume}
                />
              </label>
              <label className="edit_form_label" htmlFor="rating">
                Overall rating
                <ControlSelect
                  aria-label="Overall Rating"
                  value={starrating}
                  className="edit_form_select"
                  name="rating"
                  id="rating"
                  choices={5}
                  option="&#x2605;"
                  onChange={this.handleChangeRating}
                />
              </label>
            </legend>
          </fieldset>
          <div className="edit_review">
            <label className="edit_form_label" htmlFor="review">
              What's changed at this spot?
              <textarea
                aria-label="What's changed? Leave a review."
                className="edit_form_text"
                type="text"
                name="content"
                value={content}
                placeholder="Tell us about your visit"
                onChange={this.handleChangeContent}
              />
            </label>
          </div>
          <div className="edit_form_controls">
            <button
              className="edit_form_cancel"
              type="button"
              onClick={this.handleClickCancel}
            >
              Cancel
            </button>
            <button className="edit_form_button" type="submit">
              Submit
            </button>
          </div>
        </form>
      </section>
    );
  }
}
export default withRouter(editReview);
