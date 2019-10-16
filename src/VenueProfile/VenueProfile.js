import React, {Component} from 'react'
import {Link} from 'react-router-dom'

export default class VenueProfile extends Component {

  render() {
    return(
      <section className='venueProfile'>
        <header>
          <h2>VenueName</h2>
        </header>
      <p>TYPE</p>
      <p>ADDRESS</p>
      <span>CITY</span>, <span>STATE</span><span>ZIP</span>
      <p>PHONE</p>
      <p>URL</p>
      <div className='ratings'>
        <p>OVERALL AVERAGE RATING</p>
        <p>OVERALL AVERAGE PRICE</p>
        <p>OVERALL AVERAGE VOLUME</p>
      </div>
      <Link to='/addreview/'><button>ADD A REVIEW</button></Link>
      <button>Add to Favorites</button> 
      </section>
    )
  }
}