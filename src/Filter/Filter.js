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
  const [checkedOpt, setCheckedOpt] = useState(null);

  function getValue() {
    let radioChecked = document.querySelector(
      `input[name=${groupName}]:checked`
    );
    setCheckedOpt(radioChecked);
    handleFilter(groupName, radioChecked.value);
  }

  function clearChecked() {
    if (checkedOpt) {
      checkedOpt.checked = false;
      resetFilter(groupName);
      setCheckedOpt(null);
    }
  }

  function makeLabels() {
    let display = [];
    valueOptions.forEach((opt, idx) => {
      let i = 3;
      let optionVal = [];
      while (i >= 3 - idx) {
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
      let i = 0;
      let optionVal = [];
      while (i < 3 - idx) {
        optionVal.push(symbol());
        i++;
      }
      display.push(optionVal);
    });
    return display;
  }

  let labels = makeLabels();

  let empty = makeEmpty();

  return (
    <>
      {checkedOpt && <button onClick={clearChecked}>Clear</button>}
      <form className={s.filterForm} onChange={getValue}>
        <fieldset>
          <legend>{title}</legend>
          {valueOptions.map((opt, idx) => {
            return (
              <div key={opt} className={s.formElement}>
                <input
                  type="radio"
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
                </label>
              </div>
            );
          })}
        </fieldset>
      </form>
    </>
  );
};

export default Filter;
