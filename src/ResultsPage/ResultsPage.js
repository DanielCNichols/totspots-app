import React from 'react';
import Result from '../Result/Result';
import VenueContext from '../VenuesContext';
import { withRouter } from 'react-router-dom';
import './Resultspage.css';
import ApiService from '../services/api-service';
import Loading from '../Loading/Loading';
import qs from 'qs';
import dummyData from '../reference';
class ResultsPage extends React.Component {
  static contextType = VenueContext;

  state = {
    loading: false,
  };

  componentDidMount() {
    //Get the query params for our fetch! this returns an object
    let query = qs.parse(this.props.location.search, {
      ignoreQueryPrefix: true,
    });
    this.context.clearError();
    ApiService.getVenues(query)
      .then(venues => {
        console.log(venues);
        this.context.setVenues(venues.results);
        this.setState({ loading: false });
      })
      .catch(err => {
        console.log(err);
        this.setState({ loading: false });
      });
  }

  handleAddClick() {
    this.props.history.push('/addvenue');
  }

  prerender() {
    let { city, type } = this.props.match.params;
    let { venues, error } = this.context;
    if (this.state.loading === true) {
      return (
        <section className="results_page">
          <Loading />
        </section>
      );
    }
    if (venues.length === 0 && !error) {
      return (
        <section className="results_page">
          <div>
            <p>Sorry, no results found for that search</p>
          </div>
        </section>
      );
    }
    if (error) {
      return (
        <section className="results_page">
          <div>{this.renderError()}</div>
        </section>
      );
    } else {
      return (
        <section className="results_page">
          <header className="results_header">
            <h2>
              Showing results for {type} in <span>{city}</span>
            </h2>
          </header>
          <ul>
            {venues.map(venue => (
              <Result venue={venue} key={venue.id} />
            ))}
          </ul>
          <div className="addvenue">
            <p>Is something missing?</p>
            <button
              onClick={() => {
                this.handleAddClick();
              }}
            >
              Suggest a new venue
            </button>
          </div>
        </section>
      );
    }
  }

  renderError() {
    let error = this.context.error;
    if (this.context.error) {
      return (
        <div className="error">
          <p>Sorry, something has gone wrong. {error.error}</p>
        </div>
      );
    }
  }

  render() {
    return <div>{this.prerender()}</div>;
  }
}

export default withRouter(ResultsPage);
