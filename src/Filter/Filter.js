import React, { useState } from 'react';
import s from './Filter.module.css';

const Filter = ({
  title,
  symbol,
  groupName,
  valueOptions,
  handleFilter,
  resetFilter,
  iconClass,
}) => {
  function makeLabels() {
    let display = [];

    valueOptions.forEach((opt, idx) => {
      let i = 5;
      let optionVal = [];
      while (i >= 5 - opt) {
        optionVal.push(symbol());
        i--;
      }
      display.push(optionVal);
    });
    return display;
  }

  function makeEmpty() {
    let display = [];

    valueOptions.forEach((opt, idx) => {
      let i = 1;
      let optionVal = [];
      while (i < 5 - opt) {
        optionVal.push(symbol());
        i++;
      }
      display.push(optionVal);
    });
    return display;
  }

  let labels = makeLabels();
  let empty = makeEmpty();
  console.log(labels);
  return (
    <form className={s.filterForm}>
      <fieldset>
        <legend>{title}</legend>
        {valueOptions.map((idx, opt) => {
          return (
            <div key={opt} className={s.formElement}>
              <input
                type="checkbox"
                name={groupName}
                id={groupName + opt}
                value={opt}
              />

              <label htmlFor={groupName + opt} key={idx}>
                {labels[idx].map((label, idx) => {
                  return (
                    <span className={iconClass} key={idx}>
                      {label}
                    </span>
                  );
                })}
                {empty[idx].map((label, index) => {
                  return index !== empty[idx].length - 1 ? (
                    <span className="empty" key={index}>
                      {label}
                    </span>
                  ) : (
                    <div style={{ display: 'flex' }} key={index}>
                      <span className="empty">{label}</span>
                      <span
                        style={{
                          marginLeft: '3px',
                          fontSize: '1em',
                          fontWeight: 'bold',
                        }}
                      >
                        & up
                      </span>
                    </div>
                  );
                })}
                {/* <span className={s.labelText}> & up</span> */}
              </label>
            </div>
          );
        })}
      </fieldset>
    </form>
  );
};

export default Filter;
