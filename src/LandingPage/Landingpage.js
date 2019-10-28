import React from 'react';
import { Link } from 'react-router-dom';
import ApiService from '../services/api-service';
import VenueContext from '../VenuesContext'
import {withRouter} from 'react-router-dom';
import './LandingPage.css'

class LandingPage extends React.Component {
  static contextType = VenueContext

  handleSubmit = ev => {
    ev.preventDefault()
    const city = ev.target.city.value.toLowerCase();
    const queryState = ev.target.state.value.toLowerCase();
    const type = ev.target.type.value.toLowerCase();
    this.context.setCity(city)
    this.context.setSearchState(queryState)
    this.context.setType(type)
    this.props.history.push('/reviews')
    };


  render() {
    const {error} = this.context
    return (
      <section className="landingpage">
        <header className="landingpage_hero">
          <h1>Tot Spots</h1>
          <p>For parents, by parents.</p>
        </header>
        <div className="search">
          <p>I want to take my family to a...</p>
          <form className="search_form" onSubmit={this.handleSubmit}>
            <label className="search_form_label" htmlFor="type" required>Venue or event...
              <select className="search_form_select" name="type" id="type">
                <option value="">Select a type of venue/event</option>
                <option value="Restaurant">Restaurants</option>
                <option value="Bar">Brewery/Bar</option>
                <option value="Educational">Educational</option>
                <option value="music">Music</option>
                <option value="outdoor">Outdoor</option>
              </select>
            </label>
            <p>in...</p>
            <label className= "search_form_label" htmlFor="city"> City
              <input
                className="search_form_text"
                type="text"
                name="city"
                id="city"
                placeholder="Durham"
                required
              />
            </label>
            <label 
            className="search_form_label"
            htmlFor="state"> State
              <input
              className="search_form_text"
                type="text"
                name="state"
                max-length="2"
                placeholder="NC"
                required
              />
            </label>
            <div className="search_form_control">
            <button className="search_form_button" type="submit">Let's go!</button>
            </div>
          </form>
        </div>
        <div role='alert'>
          {error && <p className='error'>{error}</p>}
        </div>
        <p>
          Have an account? <Link to='/login'>Log in</Link> or 
          <Link to='/register'> sign up</Link>
        </p>
      </section>
    );
  }
}

export default withRouter(LandingPage)