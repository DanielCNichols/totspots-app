import React from 'react'
import Result from '../Result/Result'
import VenueContext from '../VenuesContext'
import { Link } from 'react-router-dom'
import './Resultspage.css'


export default class ResultsPage extends React.Component {
  static contextType = VenueContext

  render() {
    let { venues } = this.context
    return (
      <section className="results_page">
        <header className="results_header">
          <h2>Showing results for "{this.context.type}" in {this.context.city}</h2>
        </header>
        <ul>
          {venues.map((venue => (
            <Result venue={venue} key={venue.id} />
          )))}
        </ul>
        <div className="addvenue">
          <p>Is something missing?</p>
          <Link to='/addVenue'><button>Suggest a new venue</button></Link>
        </div>
      </section>
    )
  }
}