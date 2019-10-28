import React from 'react';
import Result from '../Result/Result';
import VenueContext from '../VenuesContext';
import {withRouter} from 'react-router-dom'
import './Resultspage.css';
import ApiService from '../services/api-service'

class ResultsPage extends React.Component {
  static contextType = VenueContext;

  componentDidMount() {
    const {city, searchState, type} = this.context
    this.context.clearError()
    ApiService.getVenues(city, searchState, type)
    .then(venues => {
      this.context.setVenues(venues)
    })
    .catch(this.context.setError)
  }

  handleAddClick() {
    this.props.history.push('/addvenue')
  }

  prerender() {
    let { venues } = this.context;
    if (venues.length === 0) {
      return (
        <div>
          <p>Sorry, no results found for that search</p>
        </div>
      );
    } else {
      return (
        <section className="results_page">
          <header className="results_header">
            <h2>
              Showing results for "{this.context.type}" in {this.context.city}
            </h2>
          </header>
          <ul>
            {venues.map(venue => (
              <Result venue={venue} key={venue.id} />
            ))}
          </ul>
          <div className="addvenue">
            <p>Is something missing?</p>
              <button onClick={() => {this.handleAddClick()}}>Suggest a new venue</button>
          </div>
        </section>
      );
    }
  }

  render() {
    return <div>{this.prerender()}</div>;
  }
}

export default withRouter(ResultsPage)