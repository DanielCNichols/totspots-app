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
  const [query, setQuery] = useState('');

  //A cleaner way to set our query string up.
  function formatQueryString(token) {
    let query = qs.parse(props.location.search, {
      ignoreQueryPrefix: true,
    });

    setQuery(query);

    let queryParams = { ...query, ...filters };

    let params = new URLSearchParams(queryParams);
    return params;
  }

  //*Runs on the initial page load and filter update
  useEffect(() => {
    console.log('initial load effect');
    context.clearError();
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
  }, [filters]);

  // //* runs on page update
  useEffect(() => {
    //* stops from triggering error
    if (page) {
      context.clearError();
      let queryString = `token=${nextPage}`;
      ApiService.getVenues(queryString)
        .then(venues => {
          context.setVenues([...context.venues, ...venues.results]);
          setNextPage(venues.next_page_token);
          setLoading(false);
        })
        .catch(err => {
          setFetchError(err);
        });
    }
  }, [page]);

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

  function handleResetFilter(name) {
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
            resetFilter={handleResetFilter}
            title="Price"
            symbol={FaDollarSign}
            groupName="priceOpt"
            valueOptions={[1, 2, 3, 4]}
            iconClass="dollar"
          />
        </div>
        <div className={s.filterElement}>
          <Filter
            handleFilter={handleSetFilters}
            resetFilter={handleResetFilter}
            title="Avg. Google Review"
            symbol={FaStar}
            groupName="googleRatingOpt"
            valueOptions={[1, 2, 3, 4]}
            iconClass="star"
          />
        </div>
        <div className={s.filterElement}>
          <Filter
            handleFilter={handleSetFilters}
            resetFilter={handleResetFilter}
            title="Avg. Totspots Rating"
            symbol={FaChild}
            groupName="tsRatingOpt"
            valueOptions={[1, 2, 3, 4]}
            iconClass="totspots"
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
      <div className={s.mapContainer}>
        <MapContainer query={query} />
      </div>
    </section>
  );
}

export default withRouter(Sizes(displayRules)(ResultsPage));
