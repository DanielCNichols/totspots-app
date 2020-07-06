import React from 'react';
import s from './FilterChips.module.css';

const FilterChips = ({ handleFilter, resetFilter }) => {
  const features = [
    'Stroller Accessible',
    'Play Area',
    'Changing Tables',
    'Dogs Welcome',
    'Fast Checkout',
    'Kids Specials',
    'Outdoor Seating',
  ];

  function getValue() {
    let checkboxes = document.querySelectorAll(
      `input[name="features"]:checked`
    );

    if (checkboxes.length) {
      console.log('running first if');
      let options = [];
      checkboxes.forEach(box => {
        options.push(box.value);
      });
      handleFilter('features', options);
    } else {
      console.log('clearing');
      resetFilter('features');
    }
  }

  return (
    <form className={s.filterChips} onChange={getValue}>
      <fieldset>
        <legend>Features</legend>
        {features.map(feat => {
          return (
            <div className={s.chipContainer} key={feat}>
              <input type="checkbox" id={feat} name="features" value={feat} />
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
