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
import FilterChips from '../FilterChips/FilterChips';

function ResultsPage(props) {
  const context = useContext(VenueContext);

  const [loading, setLoading] = useState(false);
  const [showFilter, setShowFilter] = useState(false);
  const [showMap, setShowMap] = useState(false);
  const [nextPage, setNextPage] = useState(null);
  const [page, setPage] = useState(null);
  const [fetchError, setFetchError] = useState(null);
  const [featureFilter, setFeatureFilter] = useState({});

  // const [venues, setVenues] = useState({});

  let query = {};

  query = qs.parse(props.location.search, {
    ignoreQueryPrefix: true,
  });

  useEffect(() => {
    context.clearError();
    if (nextPage) {
      query.token = nextPage;
    }
    ApiService.getVenues(query)
      .then(venues => {
        console.log('this is the incoming', venues.results);
        if (context.venues.length) {
          context.setVenues([...context.venues, ...venues.results]);
        } else {
          context.setVenues(venues.results);
        }
        setNextPage(venues.next_page_token);
        setLoading(false);
      })
      .catch(err => {
        setFetchError(err);
      });
  }, [page]);

  function mobileMapToggle() {
    setShowMap(!showMap);
    console.log(showMap);
  }

  function handleShowMore() {
    if (nextPage) {
      setPage(page + 1);
    }
  }

  // FILTERS WILL HAVE TO BE:
  // MIN/MAX Price (can use an object, need to change the ui to a range bar)
  //AMENITIES (can use an object for all of them )
  //SORT BY RATINGS/TSRATING

  //Pass in the groupname/key and an object representing the min/max/options
  //Use the spread operator on objects to reassign the original values and set the state
  function handleSetFilters(name, options) {
    let newFilters = { ...featureFilter };
    newFilters[name] = options;
    setFeatureFilter(newFilters);
  }

  function handleResetFilter(name) {
    console.log('clearing');
    let newFilters = { ...featureFilter };
    delete newFilters[name];
    setFeatureFilter(newFilters);
  }

  //The resultPageControls handles the hide/show buttons for the map and
  //filters in the mobile view. It should remain hidden until <450px

  return (
    <section className={s.resultsPage}>
      {props.isMobile ? (
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
      ) : null}

      <div className={s.resultsControls}>
        <h3>Refine Search</h3>
        <div className={s.filterElement}>
          <FilterBar
            handleFilter={handleSetFilters}
            resetFilter={handleResetFilter}
            title="Filter by price"
            symbol="$"
            groupName="priceOpt"
            valueOptions={[0, 1, 2, 3]}
          />
        </div>
        <div className={s.filterElement}>
          <FilterBar
            handleFilter={handleSetFilters}
            resetFilter={handleResetFilter}
            title="Filter by Rating"
            symbol="$"
            groupName="ratingOpt"
            valueOptions={[0, 1, 2, 3]}
          />
        </div>
        <div className={s.filterElement}>
          <FilterBar
            handleFilter={handleSetFilters}
            resetFilter={handleResetFilter}
            title="Filter by Totspots Rating"
            symbol="$"
            groupName="tsFilterOpt"
            valueOptions={[0, 1, 2, 3]}
          />
        </div>
        <div className={s.filterElement}>
          <FilterChips
            handleFilter={handleSetFilters}
            resetFilter={handleResetFilter}
          />
        </div>
      </div>
      <div className={s.resultsContainer}>
        {context.venues.map(venue => {
          return <Result venue={venue} key={venue.id} />;
        })}
        <button onClick={() => handleShowMore(nextPage)}>See More</button>
      </div>
      <div className={s.mapContainer}>
        <MapContainer query={query} />
      </div>
    </section>
  );
}

export default withRouter(Sizes(displayRules)(ResultsPage));
