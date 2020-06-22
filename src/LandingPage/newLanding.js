import React from 'react';
import styles from './newLanding.module.scss';
import { FaGlassMartini, FaCoffee } from 'react-icons/fa';
import { GiKnifeFork } from 'react-icons/gi';
export default function newLanding() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.heroImage}>
        <div className={styles.heroText}>
          <h1>For parents, by parents!</h1>
          <p>Find!</p>
        </div>
        <div className={styles.form}>
          <select>
            <option value=''>Find a...</option>
            <option value=''>restaurant</option>
            <option value=''>bar</option>
            <option value=''>coffee shop</option>
            <option value=''>museum</option>
          </select>
          <input type='text' placeholder='in...' />
          <button type='submit'>Go!</button>
        </div>
      </div>
      <div className={styles.onboarding}>
        <div style={{ textAlign: 'center', marginBottom: '100px' }}>
          <h3 style={{ fontSize: '2.0em' }}>
            Finally, a review app for parents
          </h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus maxime eveniet laudant.
          </p>
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            width: '100%',
            justifyContent: 'space-evenly',
          }}
        >
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
