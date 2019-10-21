import React from 'react'
import Result from '../result/result'
import VenueContext from '../VenuesContext'
import {Link} from 'react-router-dom'
import './Resultspage.css'


export default class ResultsPage extends React.Component {
  static contextType = VenueContext

render() {
  let {venues} = this.context
  return (
    <section className="main" role='main'>

      {/* Maybe split into another component?  */}
      <header>
        <h2>Showing results for {this.context.type} in {this.context.city}</h2>
      </header>
      <div className="addvenue">
        <p>Is something missing?</p>
        <Link to='/addVenue'><button>Suggest a new venue</button></Link>
      </div>
      <ul>
          {venues.map((venue =>(
              <Result venue={venue} key={venue.id} />
          )))}
      </ul>
      
    </section>
    )
  }
}