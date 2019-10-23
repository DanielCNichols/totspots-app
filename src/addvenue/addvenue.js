import React from 'react';
import { Link } from 'react-router-dom';
import ApiService from '../services/api-service';
import { withRouter } from 'react-router-dom';
import './Addvenue.css'

class AddVenue extends React.Component {
  state = {
    stroller: false,
    playarea: false,
    changingtable: false,
    dogs: false,
    fastCheckout: false,
    kidsNight: false,
    outdoor: false
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
    const venue = ev.target.venue.value;
    const address = ev.target.address.value;
    const city = ev.target.city.value;
    const state = ev.target.state.value;
    const type = ev.target.type.value;
    const zipcode = ev.target.zipcode.value;
    const price = ev.target.price.value;
    const volume = ev.target.volume.value;
    const starrating = ev.target.rating.value;
    const content = ev.target.content.value;
    const stateCheck = Object.keys(this.state);
    const stateValues = Object.values(this.state);
    const amenities = this.getAmenities(stateCheck, stateValues);
    const aObj = amenities.map(amenity => {
      return {
        amenity: amenity
      };
    });
    ApiService.addVenue(venue, address, city, state, type, zipcode, price, volume, starrating, content, aObj)
    .catch(this.context.setError);
    this.props.history.push('/');
  };

  render() {
    return (
      <section>
        <header>
          <h2>Add A Venue</h2>
        </header>
        <form className="add_form" onSubmit={this.handleSubmit}>
            <label className='add_form_label' htmlFor='venue'>
                Venue/Event Name
                <input className= "add_form_text"
                  type='text'
                  name='venue'
                  id='Venue'
                  placeholder="ex: Bull McCabe's"
                />
              </label>
              <label htmlFor='address'>
                Street Address
                <input className= "add_form_text"
                 type='text' name='address' placeholder='123 Main St.' />
              </label>
              <label htmlFor='city'>
                City
                <input
                className= "add_form_text"
                type='text' name='city' placeholder='ex: Durham' />
              </label>
              <label htmlFor='state'>
                State
                <input
                  className= "add_form_text"
                  type='text'
                  name='state'
                  placeholder='ex: NC'
                  maxLength='2'
                />
              </label>
              <label htmlFor='zipcode'>
                Zipcode
                <input 
                className= "add_form_text"
                type='text' name='zipcode' placeholder='ex: 27705' />
              </label>
              <label htmlFor='Website'>
                Website
                <input
                className= "add_form_text"
                  type='text'
                  name='Website'
                  placeholder='www.reddit.com'
                />
              </label>
              <label htmlFor='Phone'>
                Phone
                <input 
                className= "add_form_text"
                type='text' name='Phone' placeholder='(555) 245-3456' />
              </label>
              <label htmlFor='type'>
                Type of venue/event
                <select 
                className="add_form_select"
                name='type' id='type'>
                  <option value=''>Please select</option>
                  <option value='Restaurant'>Restaurant</option>
                  <option value='Bar'>Brewery/Bar</option>
                  <option value='Educational'>Educational</option>
                  <option value='music'>Music</option>
                  <option value='outdoor'>Outdoor</option>
                </select>
              </label>
                    {/* <legend> */}
                      <label htmlFor='price'>
                        Price
                        <select 
                         className="add_form_select"
                        name='price' id='price'>
                          <option value=''>Please select</option>
                          <option value='1'>$</option>
                          <option value='2'>$$</option>
                          <option value='3'>$$$</option>
                          <option value='4'>$$$$</option>
                          <option value='5'>$$$$$</option>
                        </select>
                      </label>
                      <label htmlFor='volume'>
                        Volume Level
                        <select 
                         className="add_form_select"
                        name='volume' id='volume'>
                          <option value=''>Please select</option>
                          <option value='1'>Library</option>
                          <option value='2'>Coffee Shop</option>
                          <option value='3'>Restaurant</option>
                          <option value='4'>Bar/Brewery</option>
                          <option value='5'>Concert</option>
                        </select>
                      </label>
                      <label 
                      htmlFor='rating'>
                        Overall rating
                        <select 
                        className="add_form_select"
                        name='rating' id='rating'>
                          <option value=''>Please select</option>
                          <option value='1'>&#x2605;</option>
                          <option value='2'>&#x2605; &#x2605;</option>
                          <option value='3'>&#x2605; &#x2605; &#x2605;</option>
                          <option value='4'>
                            &#x2605; &#x2605; &#x2605; &#x2605;
                          </option>
                          <option value='5'>
                            &#x2605; &#x2605; &#x2605; &#x2605; &#x2605;
                          </option>
                        </select>
                      </label>
                    {/* </legend> */}
                  <fieldset>
                    <legend>
                      Amenities
                      <div className='amenities'>
                        <label htmlFor='StrollerAccessible'>
                          Stroller Accessible
                          <input
                            onChange={() => {
                              this.setState({ stroller: !this.state.stroller });
                            }}
                            type='checkbox'
                            name='amenities'
                            value='1'
                          />
                        </label>
                        <label htmlFor='PlayArea'>
                          Play Area
                          <input
                            onChange={() => {
                              this.setState({ playarea: !this.state.playarea });
                            }}
                            type='checkbox'
                            name='PlayArea'
                            value='2'
                          />
                        </label>
                        <label htmlFor='Changingtable'>
                          {' '}
                          Changing Table
                          <input
                            onChange={() => {
                              this.setState({
                                changingtable: !this.state.changingtable
                              });
                            }}
                            type='checkbox'
                            name='amenities'
                            value='3'
                          />
                        </label>
                        <label htmlFor='Dogs'>
                          Dogs Welcome
                          <input
                            onChange={() => {
                              this.setState({ dogs: !this.state.dogs });
                            }}
                            type='checkbox'
                            name='amenities'
                            value='4'
                          />
                        </label>
                        <label htmlFor='Fastcheckout'>
                          {' '}
                          Fast Checkout
                          <input
                            onChange={() => {
                              this.setState({
                                fastCheckout: !this.state.fastCheckout
                              });
                            }}
                            type='checkbox'
                            name='amenities'
                            value='5'
                          />
                        </label>
                        <label htmlFor='KidsNight'>
                          {' '}
                          Kids Night Deals
                          <input
                            onChange={() => {
                              this.setState({
                                KidsNight: !this.state.KidsNight
                              });
                            }}
                            type='checkbox'
                            name='amenities'
                            value='6'
                          />
                        </label>
                        <label htmlFor='OutdoorSeating'>
                          {' '}
                          Outdoor Seating
                          <input
                            onChange={() => {
                              this.setState({ outdoor: !this.state.outdoor });
                            }}
                            type='checkbox'
                            name='amenities'
                            value='7'
                          />
                        </label>
                      </div>
                    </legend>
                  </fieldset>
                  <div className='review'>
                    <label htmlFor='review'>
                      Tell us about your visit
                      <textarea
                        type='textArea'
                        name='content'
                        placeholder='Tell us about your visit'
                      />
                    </label>
                  </div>
                  <div className='add_form_controls'>
          <button className="add" type='submit'>Submit</button>
          <Link to='/'>
            <button className="cancel">Cancel</button>
          </Link>
          </div>
        </form>
      </section>
    );
  }
}

export default withRouter(AddVenue);
