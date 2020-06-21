import React from 'react';
import styles from './newLanding.module.scss';

export default function newLanding() {
  return (
    <div className={styles.heroImage}>
      <div className={styles.heroText}>
        <h1>This is a header</h1>
        <p>This is some text</p>
      </div>
      {/* <div className={styles.form}>
        <select>
          <option value="">Find a...</option>
          <option value="">restaurant</option>
          <option value="">bar</option>
          <option value="">coffee shop</option>
          <option value="">museum</option>
        </select>
        <input type="text" placeholder="in..." />
        <button type="submit">Go!</button>
      </div> */}
    </div>
  );
}
