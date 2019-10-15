import React from 'react';
import { Link } from 'react-router-dom';
import ApiService from '../services/api-service';
import VenueContext from '../VenuesContext'
import {withRouter} from 'react-router-dom';

class LandingPage extends React.Component {
  static contextType = VenueContext

  handleSubmit = ev => {
    ev.preventDefault()
    const city = ev.target.city.value;
    const state = ev.target.state.value;
    const type = ev.target.type.value;
    console.log(city, state, type)
    ApiService.getVenues(city, state, type)
    .then(this.context.setVenues)
    .catch(this.context.setError)
    this.props.history.push('/reviews')
    console.log(this.context.state)
    };

    //call for this.context.search 

  render() {
    return (
      <section className='hero'>
        <h1>Tot Spots</h1>
        <p>For parents, by parents.</p>
        <div className='form'>
          <p>I want to take my family to a...</p>
          <form onSubmit={this.handleSubmit}>
            <label htmlFor='type'>
              <select name='type' id='type'>
                <option value=''>Select a type of venue/event</option>
                <option value='Restaurant'>Restaurants</option>
                <option value='Bar'>Brewery/Bar</option>
                <option value='Educational'>Educational</option>
                <option value='music'>Music</option>
                <option value='outdoor'>Outdoor</option>
              </select>
            </label>
            <p>in...</p>
            <label htmlFor='city'>
              <input
                type='text'
                name='city'
                id='city'
                placeholder='Durham'
              />
            </label>
            <label htmlFor='state'>
              <input
                type='text'
                name='state'
                max-length='2'
                placeholder='NC'
              />
            </label>
            <button type="submit">Go</button>
          </form>
        </div>
        <p>
          Have an account? <Link to='/login'>Log in</Link> or{' '}
          <Link to='/register'>sign up</Link>
        </p>
      </section>
    );
  }
}

export default withRouter(LandingPage)