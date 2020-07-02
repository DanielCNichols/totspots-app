import React, { useState, useEffect, useContext } from 'react';
import Result from '../Result/Result';
import VenueContext from '../VenuesContext';
import { withRouter } from 'react-router-dom';
import s from './Resultspage.module.css';
import ApiService from '../services/api-service';
import qs from 'qs';
import MapContainer from '../Map/Map';
import ToggleSwitch from '../ToggleSwitch/ToggleSwitch';
import Sizes from 'react-sizes';
import displayRules from '../displayRules';
import FilterBar from '../FilterBar/FilterBar';
import { MdAttachMoney } from 'react-icons/md';

function ResultsPage(props) {
  const context = useContext(VenueContext);

  const [loading, setLoading] = useState(false);
  const [showFilter, setShowFilter] = useState(false);
  const [showMap, setShowMap] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [fetchError, setFetchError] = useState(null);
  // const [venues, setVenues] = useState({});

  let query = {};

  query = qs.parse(props.location.search, {
    ignoreQueryPrefix: true,
  });

  useEffect(() => {
    context.clearError();
    ApiService.getVenues(query)
      .then(venues => {
        context.setVenues(venues.results);
        setLoading(false);
      })
      .catch(err => {
        setFetchError(err);
      });
  }, []);

  function mobileMapToggle() {
    setShowMap(!showMap);
    console.log(showMap);
  }

  //The resultPageControls handles the hide/show buttons for the map and
  //filters in the mobile view. It should remain hidden until <450px

  return (
    <section className={s.resultsPage}>
      {/* {props.isMobile ? (
        <div className={s.mobile}>
          {console.log('components mounted')}
          <div className={s.mobileControls}>
            <button
              className={s.showButton}
              onClick={() => setShowFilter(!showFilter)}
            >
              Show filters
            </button>
            <ToggleSwitch showMap={showMap} toggleMap={mobileMapToggle} />
          </div>
          <div className={s.mobileFilter}>
            {showFilter ? <p>These are the filters</p> : null}
          </div>
          <div className={s.mobileMap}>
            {showMap ? <MapContainer query={query} /> : null}
          </div>
        </div>
      ) : null} */}

      <div className={s.resultsControls}>
        <FilterBar
          title="Filter by price"
          symbol={MdAttachMoney()}
          groupName="filterOpt"
          valueOptions={[0, 1, 2, 3]}
        />
      </div>
      {/* <div className={s.resultsContainer}>
        {context.venues.map(venue => {
          return <Result venue={venue} key={venue.id} />;
        })}
        <button>See More</button>
      </div>
      <div className={s.mapContainer}>
        <MapContainer query={query} />
      </div> */}
    </section>
  );
}

export default withRouter(Sizes(displayRules)(ResultsPage));
