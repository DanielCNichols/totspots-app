import React from 'react'
import {Link} from 'react-router-dom'


export default function LandingPage() {

  return (
   <section class="hero">
      <h1>Tot Spots</h1>
      <p>For parents, by parents.</p>
      <div class="form">
        <p>I want to take my family to a...</p>
        <form action="">
          <label for="type">
            <select name="type" id="type">
              <option value="">Select a type of venue/event</option>
              <option value="Restaurant">Restaurants</option>
              <option value="Bar">Brewery/Bar</option>
              <option value="Educational">Educational</option>
              <option value="music">Music</option>
              <option value="outdoor">Outdoor</option>
            </select>
          </label>
          <p>in...</p>
          <label for="citySearch">
            <input type="text" name="citySearch" id="citySearch" placeholder="Durham"/>
          </label>
          <label for="stateSearch">
            <input type="text" name="stateSearch" max-length="2" placeholder='NC'/>
          </label>
          <a className='searchButton' href='search.html'>Go</a>
        </form>
      </div>
      <p>Have an account? <Link to ='/login'>Log in</Link> or <Link to='/register'>sign up</Link></p>
  </section>
  )
}