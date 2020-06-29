import React, { useState, useEffect, useContext } from 'react';
import Result from '../Result/Result';
import VenueContext from '../VenuesContext';
import { withRouter } from 'react-router-dom';
import s from './Resultspage.module.css';
import ApiService from '../services/api-service';
import qs from 'qs';

function ResultsPage(props) {
  const context = useContext(VenueContext);

  const [loading, setLoading] = useState(false);
  const [showFilter, setShowFilter] = useState(false);
  const [showMap, setShowMap] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [fetchError, setFetchError] = useState(null);

  useEffect(() => {
    let query = qs.parse(props.location.search, {
      ignoreQueryPrefix: true,
    });
    context.clearError();
    ApiService.getVenues(query)
      .then(venues => {
        console.log('heres the venues');
        context.setVenues(venues.results);
        setLoading(false);
      })
      .catch(err => {
        setFetchError(err);
      });
  }, []);

  //Handle loading more

  //The resultPageControls handles the hide/show buttons for the map and
  //filters in the mobile view. It should remain hidden until <450px

  return (
    <section className={s.resultsPage}>
      <div className={s.mobile}>
        <div className={s.mobileControls}>
          <button
            className={s.showButton}
            onClick={() => setShowFilter(!showFilter)}
          >
            Show filters
          </button>
          <button className={s.showMap} onClick={() => setShowMap(!showMap)}>
            Show Map
          </button>
        </div>
        <div className={s.mobileFilter}>
          {showFilter ? <p>These are the filters</p> : null}
        </div>
        <div className={s.mobileMap}>
          {showMap ? <p>This is the map</p> : null}
        </div>
      </div>

      {/* <div className={s.resultsPage}> */}
      <div className={s.resultsControls}>
        <p>This should stay put</p>
      </div>
      <div className={s.resultsContainer}>
        {context.venues.map(venue => {
          return <Result venue={venue} key={venue.id} />;
        })}
        <button>See More</button>
      </div>
      <div className={s.mapContainer}>
        <p>This should stay put</p>
      </div>
      {/* </div> */}
    </section>
  );
}

export default withRouter(ResultsPage);
