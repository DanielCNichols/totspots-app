import React from 'react';
import s from './FilterChips.module.css';

const FilterChips = props => {
  const features = [
    'Stroller Accessible',
    'Play Area',
    'Changing Tables',
    'Dogs Welcome',
    'Fast Checkout',
    'Kids Specials',
    'Outdoor Seating',
  ];

  return (
    <form className={s.filterChips}>
      <fieldset>
        <legend>Features</legend>
        {features.map(feat => {
          return (
            <div className={s.chipContainer} key={feat}>
              <input type="checkbox" id={feat} name={feat} value={feat} />
              <label htmlFor={feat}>
                <span>{feat}</span>
              </label>
            </div>
          );
        })}
      </fieldset>
    </form>
  );
};

export default FilterChips;
