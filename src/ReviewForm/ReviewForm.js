import React from 'react';
import VenuesContext from '../VenuesContext'
import ApiService from '../services/api-service'

export default class ReviewForm extends React.Component {
  static contextType = VenuesContext;

  state = {
    stroller: false,
    playarea: false,
    changingtable: false,
    dogs: false,
    fastCheckout: false,
    kidsNight: false, 
    outdoor: false, 
  }

  
 
  getAmenities(stateCheck, stateValues) {
    let amenities = [];
    for (let i = 0; i < stateCheck.length; i++) {
      if (stateValues[i] === true) {
        amenities.push(stateCheck[i])
        console.log(amenities)
      }
    }
    return amenities;
  } 

  handleSubmit= ev => {
  ev.preventDefault();
  const venueId = this.context.selectedVenue.id
  const price = ev.target.price.value;
  const volume = ev.target.volume.value;
  const starrating = ev.target.rating.value;
  const content = ev.target.content.value
  const stateCheck = Object.keys(this.state)
  const stateValues = Object.values(this.state)
  const amenities = this.getAmenities(stateCheck, stateValues)
  ApiService.postReviews(venueId, content, price, volume, starrating )
  .catch(this.context.setError)
  this.props.history.push('/venue/venueId')
  
  }


  render() {
    return (
      <section className='main'>
        <header>
          <h2>Add A review</h2>
        </header>

        <h3>VENUE NAME</h3>
        <form onSubmit={this.handleSubmit}>
          <fieldset>
            <legend>
              <label htmlFor='price'>
                price
                <select name='price' id='price'>
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
                <select name='volume' id='volume'>
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
                <select name='rating' id='rating'>
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
          <fieldset>
            <legend>
              amenities
              <div className='amenities'>
                <label htmlFor='StrollerAccessible'>
                  Stroller Accessible
                  <input
                    onChange={()=>{this.setState({stroller: !this.state.stroller})}}
                    type='checkbox'
                    name='amenities'
                    value='StrollerAccessible'
                  />
                </label>
                <label htmlFor='PlayArea'>
                  Play Area
                  <input
                  onChange={()=>{this.setState({playarea: !this.state.playarea})}}
                   type='checkbox' 
                   name='PlayArea' 
                   value='PlayArea' />
                </label>
                <label htmlFor='Changingtable'>
                  {' '}
                  Changing Table
                  <input
                  onChange={()=>{this.setState({changingtable: !this.state.changingtable})}}
                    type='checkbox'
                    name='amenities'
                    value='Changingtable'
                  />
                </label>
                <label htmlFor='Dogs'>
                  Dogs Welcome
                  <input 
                  onChange={()=>{this.setState({dogs: !this.state.dogs})}}
                  type='checkbox' 
                  name='amenities' 
                  value='Dogs' />
                </label>
                <label htmlFor='Fastcheckout'>
                  {' '}
                  Fast Checkout
                  <input 
                  onChange={()=>{this.setState({fastCheckout: !this.state.fastCheckout})}}
                  type='checkbox'
                   name='amenities' 
                   value='Fast' />
                </label>
                <label htmlFor='KidsNight'>
                  {' '}
                  Kids Night Deals
                  <input 
                  onChange={()=>{this.setState({KidsNight: !this.state.KidsNight})}}
                  type='checkbox' 
                  name='amenities' 
                  value='KidsNight' />
                </label>
                <label htmlFor='OutdoorSeating'>
                  {' '}
                  Outdoor Seating Available
                  <input
                  onChange={()=>{this.setState({outdoor: !this.state.outdoor})}}
                    type='checkbox'
                    name='amenities'
                    value='Outdoor'
                  />
                </label>
              </div>
            </legend>
          </fieldset>
          <div className='review'>
            <label htmlFor='review'>
              Write your review
              <input
                type='text'
                name='content'
                placeholder='Tell us about your visit'
              />
            </label>
          </div>
          <button type='submit'>Submit</button>
          <button>Cancel</button>
        </form>
      </section>
    );
  }
}
