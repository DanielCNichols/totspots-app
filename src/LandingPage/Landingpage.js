import React, { useState } from 'react';
import styles from './LandingPage.module.css';
import { FaGlassMartini, FaCoffee } from 'react-icons/fa';
import { GiKnifeFork } from 'react-icons/gi';
import Autocomplete from 'react-google-autocomplete';

function NewLanding(props) {
  const [type, setType] = useState('');
  const [loc, setLoc] = useState({
    lat: null,
    lng: null,
  });

  function handleSelect(place) {
    setLoc({
      lat: place.geometry.location.lat(),
      lng: place.geometry.location.lng(),
    });
  }

  function handleSelectType(type) {
    setType(type);
  }

  function handleSearch() {
    props.history.push(
      `/results/search?type=${type}&lat=${loc.lat}&lng=${loc.lng}`
    );
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.heroImage}>
        <div className={styles.heroText}>
          <h1>For parents, by parents!</h1>
          <p>Find!</p>
        </div>
        <div className={styles.form}>
          <select onChange={e => handleSelectType(e.target.value)}>
            <option value="">Find a...</option>
            <option value="restaurant">Restaurant</option>
            <option value="bar">Bar</option>
            <option value="cafe">Coffee Shop</option>
            <option value="museum">Museum</option>
            <option value="park">Park</option>
            <option value="shopping_mall">Mall</option>
            <option value="point_of_interest">Attractions</option>
          </select>
          {/* <AutoCompleteInput onPlaceLoaded={handleSelect} /> */}
          <Autocomplete onPlaceSelected={place => handleSelect(place)} />
          <button type="submit" onClick={handleSearch}>
            Go!
          </button>
        </div>
      </div>
      <div className={styles.onboarding}>
        <div className={styles.onboardingHeader}>
          <h3 style={{ fontSize: '2.0em' }}>SWEET! a review app for parents</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus maxime eveniet laudant.
          </p>
        </div>
        <div className={styles.cardContainer}>
          <div className={styles.onboardingCard}>
            <FaGlassMartini
              className={styles.onboardingCardSvg}
            ></FaGlassMartini>
            <div className={styles.onboardingContent}>
              <h4>Find!</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
                laudantium delectus obcaecati deleniti quasi dolorum,
                perferendis tempore
              </p>
            </div>
          </div>
          <div className={styles.onboardingCard}>
            <FaCoffee className={styles.onboardingCardSvg}></FaCoffee>
            <div className={styles.onboardingContent}>
              <h4>Review!</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
                laudantium delectus obcaecati deleniti quasi dolorum,
                perferendis tempore
              </p>
            </div>
          </div>
          <div className={styles.onboardingCard}>
            <GiKnifeFork className={styles.onboardingCardSvg}></GiKnifeFork>
            <div className={styles.onboardingContent}>
              <h4>Enjoy!</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
                laudantium delectus obcaecati deleniti quasi dolorum,
                perferendis tempore
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default NewLanding;
