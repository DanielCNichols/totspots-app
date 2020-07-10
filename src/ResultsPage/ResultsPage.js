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
import FilterChips from '../FilterChips/FilterChips';
import Filter from '../Filter/Filter';
import { FaDollarSign, FaStar, FaChild } from 'react-icons/fa';

function ResultsPage(props) {
  const context = useContext(VenueContext);

  const [loading, setLoading] = useState(false);
  const [showFilter, setShowFilter] = useState(false);
  const [showMap, setShowMap] = useState(false);
  const [nextPage, setNextPage] = useState(null);
  const [page, setPage] = useState(null);
  const [fetchError, setFetchError] = useState(null);
  const [filters, setFilters] = useState({});

  //When would we need for the data to be refethed:
  //When the min/max price changes
  //When the lat/lng changes

  //We will filter amenities and totspots rating on the client side for now in the interest of saving money.

  let query = {};

  query = qs.parse(props.location.search, {
    ignoreQueryPrefix: true,
  });

  function formatQueryString() {
    let queryString = '?';
    let query = qs.parse(props.location.search, {
      ignoreQueryPrefix: true,
    });

    let queryParams = { ...query, ...filters };

    let keys = Object.keys(queryParams);

    keys.forEach(key => {
      return key !== 'features'
        ? (queryString += `${key}=${queryParams[key]}&`)
        : (queryString += `${key}=${JSON.stringify(queryParams[key])}&`);
    });
    return queryString;
  }

  useEffect(() => {
    context.clearError();
    // if (nextPage) {
    //   query.token = nextPage;
    // }

    let queryString = formatQueryString();

    ApiService.getVenues(queryString)
      .then(venues => {
        context.setVenues(venues.results);

        setNextPage(venues.next_page_token);
        setLoading(false);
      })
      .catch(err => {
        setFetchError(err);
      });
  }, [page, filters]);

  function mobileMapToggle() {
    setShowMap(!showMap);
  }

  function handleShowMore() {
    if (nextPage) {
      setPage(page + 1);
    }
  }

  function handleSetFilters(name, options) {
    let newFilters = { ...filters };
    newFilters[name] = options;
    setFilters(newFilters);
  }

  function handleResetFeatures(name) {
    let newFilters = { ...filters };
    delete newFilters[name];
    setFilters(newFilters);
  }

  //The resultPageControls handles the hide/show buttons for the map and
  //filters in the mobile view. It should remain hidden until <450px

  return (
    <section className={s.resultsPage}>
      <div></div>
      {props.isMobile ? (
        <div className={s.mobile}>
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
          <Filter
            handleFilter={handleSetFilters}
            title="Price Price"
            symbol={FaDollarSign}
            groupName="priceOpt"
            valueOptions={[1, 2, 3, 4]}
            iconClass="dollar"
          />
        </div>
        <div className={s.filterElement}>
          <Filter
            handleFilter={handleSetFilters}
            title="Avg. Google Review"
            symbol={FaStar}
            groupName="ratingOpt"
            valueOptions={[1, 2, 3, 4]}
            iconClass="star"
          />
        </div>
        <div className={s.filterElement}>
          <Filter
            handleFilter={handleSetFilters}
            title="Avg. Totspots Rating"
            symbol={FaChild}
            groupName="tsFilterOpt"
            valueOptions={[1, 2, 3, 4]}
            iconClass="totspots"
          />
        </div>
        <div className={s.filterElement}>
          <FilterChips
            handleFilter={handleSetFilters}
            resetFilter={handleResetFeatures}
          />
        </div>
      </div>
      <div className={s.resultsContainer}>
        <h3>Showing some results</h3>
        {context.venues.map(venue => {
          return <Result venue={venue} key={venue.id} />;
        })}
        {nextPage && !fetchError ? (
          <button onClick={() => handleShowMore(nextPage)}>See More</button>
        ) : (
          'end of results'
        )}
      </div>
      {/* <div className={s.mapContainer}>
        <MapContainer query={query} />
      </div> */}
    </section>
  );
}

export default withRouter(Sizes(displayRules)(ResultsPage));

//This works for the next page functionality, but throws dup key error with the filters. Can we do two different types of fetches? Read up.

// ApiService.getVenues(queryString)
// .then(venues => {
//   if (context.venues.length) {
//     context.setVenues([...context.venues, ...venues.results]);
//   } else {
//     context.setVenues(venues.results);
//   }
//   setNextPage(venues.next_page_token);
//   setLoading(false);
// })
// .catch(err => {
//   setFetchError(err);
// });
