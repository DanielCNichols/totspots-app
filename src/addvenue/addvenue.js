import React from 'react';
import ApiService from '../services/api-service';
import { withRouter } from 'react-router-dom';
import './Addvenue.css'
import VenuesContext from '../VenuesContext'

class AddVenue extends React.Component {

  static contextType= VenuesContext

  state = {
    stroller: false,
    playarea: false,
    changingtable: false,
    dogs: false,
    fastCheckout: false,
    kidsNight: false,
    outdoor: false,
  };

  handleCancel() {
    this.props.history.goBack();
  }

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
    const city = ev.target.city.value.toLowerCase();
    const state = ev.target.state.value.toLowerCase();
    const type = ev.target.type.value.toLowerCase();
    const zipcode = ev.target.zipcode.value;
    const url = ev.target.url.value;
    const phone = ev.target.phone.value;
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
    ApiService.addVenue(venue, address, city, state, type, zipcode, price, volume, starrating, content, phone, url, aObj)
    .then(this.context.addVenue)
    .then(() => {this.props.history.goBack();
    })
    .catch(this.context.setError);
  };

  renderError() {
    let error = this.context.error
    if(this.context.error) {
      return (
        <div className="error">
          <p>Sorry something has gone wrong.{error.error}</p>
        </div>
      )
    }
  }



  render() {
    return (
      <section className="addVenue">
        <header>
          <h2>Add A Venue</h2>
        </header>
        <div role='alert'>
          {this.renderError()}
        </div>
        <form className="add_form" onSubmit={this.handleSubmit}>
          <fieldset>+
            <legend>Venue Information

              <div className="address">
                <label className="add_form_label" htmlFor="venue">
                  Venue/Event Name
                    <input className="add_form_text"
                    type="text"
                    name="venue"
                    id="Venue"
                    placeholder="ex: Bull McCabe's"
                    required
                  />
                </label>
                <label htmlFor="address">
                  Street Address
                    <input className="add_form_text"
                    type="text" name="address" placeholder="123 Main St."
                    required
                    />
                </label>
                <label htmlFor="city">
                  City
                    <input
                    className="add_form_text"
                    type="text" name="city" placeholder="ex: Durham" 
                    required
                    />
                </label>
                <label htmlFor="state">
                  State
                    <input
                    className="add_form_text"
                    type="text"
                    name="state"
                    placeholder="ex: NC"
                    maxLength="2"
                    required
                  />
                </label>
                <label htmlFor="zipcode">
                  Zipcode
                    <input
                    className="add_form_text"
                    type="text" name="zipcode" 
                    placeholder="ex: 27705"
                    required
                  />
                </label>
                <label htmlFor="url">
                  Website
                  <input
                    className="add_form_text"
                    type="url"
                    name="url"
                    placeholder="www.reddit.com"
                    required
                  />
                </label>
                <label htmlFor="phone">
                  Phone
                  <input
                    className="add_form_text"
                    type="text" name="phone"
                    placeholder="(555) 245-3456"
                    required
                  />
                </label>
                <div className="add_form_selects">
                <label htmlFor="type">
                    Type of venue/event
                  <select
                      className="add_form_select"
                      name="type" id="type" required>
                      <option value="">Please select</option>
                      <option value="Restaurant">Restaurant</option>
                      <option value="Bar">Brewery/Bar</option>
                      <option value="Educational">Educational</option>
                      <option value="music">Music</option>
                      <option value="outdoor">Outdoor</option>
                    </select>
                  </label>
                </div>
              </div>
            </legend>
          </fieldset>
          <fieldset>
            <legend>Your review
            <label htmlFor="price" required>
                Price
                <select
                  className="add_form_select"
                  name="price" id="price" required>
                  <option value="">Please select</option>
                  <option value="1">$</option>
                  <option value="2">$$</option>
                  <option value="3">$$$</option>
                  <option value="4">$$$$</option>
                  <option value="5">$$$$$</option>
                </select>
              </label>
              <label htmlFor="volume">
                Describe the volume Level
                        <select
                  className="add_form_select"
                  name="volume" id="volume" required>
                  <option value="">Please select</option>
                  <option value="1">Library</option>
                  <option value="2">Coffee Shop</option>
                  <option value="3">Restaurant</option>
                  <option value="4">Bar/Brewery</option>
                  <option value="5">Concert</option>
                </select>
              </label>
              <label
                htmlFor="rating">
                Overall rating
                        <select
                  className="add_form_select"
                  name="rating" id="rating" required>
                  <option value="">Please select</option>
                  <option value="1">&#x2605;</option>
                  <option value="2">&#x2605; &#x2605;</option>
                  <option value="3">&#x2605; &#x2605; &#x2605;</option>
                  <option value="4">
                    &#x2605; &#x2605; &#x2605; &#x2605;
                          </option>
                  <option value="5">
                    &#x2605; &#x2605; &#x2605; &#x2605; &#x2605;
                          </option>
                </select>
              </label>
            </legend>
          </fieldset>
          <fieldset>
            <legend>Features  
            <div className="amenities">
              <label htmlFor="StrollerAccessible">
                Stroller Accessible
                          <input
                  onChange={() => {
                    this.setState({ stroller: !this.state.stroller });
                  }}
                  type="checkbox"
                  name="amenities"
                  value="1"
                />
              </label>
              <label htmlFor="PlayArea">
                Play Area
                          <input
                  onChange={() => {
                    this.setState({ playarea: !this.state.playarea });
                  }}
                  type="checkbox"
                  name="PlayArea"
                  value="2"
                />
              </label>
              <label htmlFor="Changingtable">
                {" "}
                Changing Table
                          <input
                  onChange={() => {
                    this.setState({
                      changingtable: !this.state.changingtable
                    });
                  }}
                  type="checkbox"
                  name="amenities"
                  value="3"
                />
              </label>
              <label htmlFor="Dogs">
                Dogs Welcome
                          <input
                  onChange={() => {
                    this.setState({ dogs: !this.state.dogs });
                  }}
                  type="checkbox"
                  name="amenities"
                  value="4"
                />
              </label>
              <label htmlFor="Fastcheckout">
                {" "}
                Fast Checkout
                          <input
                  onChange={() => {
                    this.setState({
                      fastCheckout: !this.state.fastCheckout
                    });
                  }}
                  type="checkbox"
                  name="amenities"
                  value="5"
                />
              </label>
              <label htmlFor="KidsNight">
                {" "}
                Kids Night Deals
                          <input
                  onChange={() => {
                    this.setState({
                      KidsNight: !this.state.KidsNight
                    });
                  }}
                  type="checkbox"
                  name="amenities"
                  value="6"
                />
              </label>
              <label htmlFor="OutdoorSeating">
                {" "}
                Outdoor Seating
                          <input
                  onChange={() => {
                    this.setState({ outdoor: !this.state.outdoor });
                  }}
                  type="checkbox"
                  name="amenities"
                  value="7"
                />
              </label>
            </div>
            <div className="add_form_review">
              <label htmlFor="review">
                Tell us about your visit
                      <textarea
                  type="textArea"
                  name="content"
                  placeholder="Tell us about your visit"
                />
              </label>
              </div>
            </legend>
          </fieldset>
        <div className="add_form_controls">
          <button onClick={() => {this.handleCancel()}} className="cancel">Cancel</button>
          <button className="add" type="submit">Submit</button>
        </div>
        </form>
      </section >

        

                    
                     
    );
  }
}

export default withRouter(AddVenue);
