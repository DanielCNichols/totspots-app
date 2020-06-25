import React, {useState} from 'react';
import styles from './LandingPage.module.scss';
import { FaGlassMartini, FaCoffee } from 'react-icons/fa';
import { GiKnifeFork } from 'react-icons/gi';
import AutoCompleteInput from '../AutocompleteInput/AutocompleteInput';


 function NewLanding(props) {

  const [type, setType] = useState('');
  const [loc, setLoc] = useState('');

  function handleSelect(place) {
    console.log(place);
    setLoc(place)
  }


   function handleSelectType(type) {
     setType(type);
   }

   function handleSearch() {
     props.history.push(`/reviews/${loc.place_id}/${type}`)
   }

  
  //Store the values in the url
  //Get the search values from the url when the next screen mounts


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
          {/* <input type="text" placeholder="in..." /> */}
          <AutoCompleteInput onPlaceLoaded={handleSelect} />
          <button type="submit" onClick={handleSearch}>Go!</button>
        </div>
      </div>
      <div className={styles.onboarding}>
        <div className={styles.onboardingHeader}>
          <h3 style={{ fontSize: '2.0em' }}>
            SWEET! a review app for parents
          </h3>
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
