import React from 'react';
import VenuesContext from '../VenuesContext';
import ApiService from '../services/api-service';
import { withRouter } from 'react-router-dom';
import './ReviewForm.css';
import FormSelect from '../Select/Select';

class ReviewForm extends React.Component {
  static contextType = VenuesContext;

  state = {
    stroller: false,
    playarea: false,
    changingtable: false,
    dogs: false,
    fastCheckout: false,
    kidsNight: false,
    outdoor: false,
  };

  getAmenities(stateCheck, stateValues) {
    let amenities = [];
    for (let i = 1; i < stateCheck.length; i++) {
      if (stateValues[i] === true) {
        amenities.push(i);
      }
    }
    return amenities;
  }

  handleSubmit = ev => {
    ev.preventDefault();
    let target = ev.target;
    const venueId = this.props.match.params.venue_id;
    const price = target.price.value;
    const volume = target.volume.value;
    const starrating = target.rating.value;
    const content = target.content.value;
    const stateCheck = Object.keys(this.state);
    const stateValues = Object.values(this.state);
    const amenities = this.getAmenities(stateCheck, stateValues);
    const aObj = amenities.map(amenity => {
      return {
        amenity: amenity,
        venue: this.context.selectedVenue.id,
      };
    });
    ApiService.postReviews(venueId, content, price, volume, starrating, aObj)
      .then(review => {
        // this.context.addReview(review);
      })
      .catch(this.context.setError);
    this.props.history.push(`/venue/${venueId}`);
  };

  handleCancel() {
    this.props.history.goBack();
  }

  render() {
    return (
      <section className='review_form_component'>
        <header>
          <h2>Add a review</h2>
        </header>
        <h3>{this.context.selectedVenue.venue_name}</h3>
        <form className='review_form' onSubmit={this.handleSubmit}>
          <fieldset>
            <legend>
              Your Review
              <div className='review_form_selects'>
                <label htmlFor='price'>
                  Price
                  <FormSelect
                    aria-label='Price'
                    aria-required='true'
                    className='review_form_select'
                    name='price'
                    id='price'
                    option='&#36;'
                    value={5}
                    required
                  />
                </label>
                <label htmlFor='volume'>
                  Describe the volume level
                  <FormSelect
                    aria-required='true'
                    aria-label='Describe the volume level'
                    className='review_form_select'
                    name='volume'
                    id='volume'
                    option='&#128227;'
                    value={5}
                    required
                  />
                </label>
                <label htmlFor='rating'>
                  Overall rating
                  <FormSelect
                    aria-required='true'
                    aria-label='Overall Rating'
                    className='review_form_select'
                    name='rating'
                    id='rating'
                    value={5}
                    option='&#x2605;'
                    required
                  />
                </label>
              </div>
            </legend>
          </fieldset>
          <fieldset>
            <legend>
              {' '}
              Features
              <div className='review_amenities'>
                <div className='left'>
                  <label htmlFor='StrollerAccessible'>
                    Stroller Accessible
                    <input
                      className='checkBox'
                      onChange={() => {
                        this.setState({ stroller: !this.state.stroller });
                      }}
                      type='checkbox'
                      name='amenities'
                      value='1'
                      aria-label='Stroller Accessible'
                    />
                  </label>
                  <label htmlFor='PlayArea'>
                    Play Area
                    <input
                      className='checkBox'
                      onChange={() => {
                        this.setState({ playarea: !this.state.playarea });
                      }}
                      type='checkbox'
                      name='PlayArea'
                      value='2'
                      aria-label='Play area'
                    />
                  </label>
                  <label htmlFor='Changingtable'>
                    {' '}
                    Changing Table
                    <input
                      className='checkBox'
                      onChange={() => {
                        this.setState({
                          changingtable: !this.state.changingtable,
                        });
                      }}
                      type='checkbox'
                      name='amenities'
                      value='3'
                      aria-label='Changing table'
                    />
                  </label>
                </div>
                <div className='right'>
                  <label htmlFor='Dogs'>
                    Dogs Welcome
                    <input
                      className='checkBox'
                      onChange={() => {
                        this.setState({ dogs: !this.state.dogs });
                      }}
                      type='checkbox'
                      name='amenities'
                      value='4'
                      aria-label='Dogs Welcome'
                    />
                  </label>
                  <label htmlFor='Fastcheckout'>
                    {' '}
                    Fast Checkout
                    <input
                      className='checkBox'
                      onChange={() => {
                        this.setState({
                          fastCheckout: !this.state.fastCheckout,
                        });
                      }}
                      type='checkbox'
                      name='amenities'
                      value='5'
                      aria-label='Fast Checkout'
                    />
                  </label>
                  <label htmlFor='KidsNight'>
                    {' '}
                    Kids Night Deals
                    <input
                      className='checkBox'
                      onChange={() => {
                        this.setState({ KidsNight: !this.state.KidsNight });
                      }}
                      type='checkbox'
                      name='amenities'
                      value='6'
                      aria-label='kids night deals'
                    />
                  </label>
                  <label htmlFor='OutdoorSeating'>
                    {' '}
                    Outdoor Seating Available
                    <input
                      className='checkBox'
                      onChange={() => {
                        this.setState({ outdoor: !this.state.outdoor });
                      }}
                      type='checkbox'
                      name='amenities'
                      value='7'
                      aria-label='outdoor seating'
                    />
                  </label>
                </div>
              </div>
            </legend>
          </fieldset>
          <div className='review_form'>
            <label htmlFor='review'>
              Tell us about your visit
              <textarea
                aria-required='true'
                aria-label='tell us about your visit'
                className='review_form_textarea'
                type='text'
                name='content'
                placeholder='Tell us about your visit'
              />
            </label>
          </div>
          <div className='review_form_controls'>
            <button
              onClick={() => {
                this.handleCancel();
              }}
              type='button'
              className='cancel'
            >
              Cancel
            </button>
            <button className='submit' type='submit'>
              Submit
            </button>
          </div>
        </form>
      </section>
    );
  }
}

export default withRouter(ReviewForm);
