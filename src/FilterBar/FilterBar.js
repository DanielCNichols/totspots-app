import React from 'react';
import s from './FilterBar.module.css';

//Pass in props for: LabelName, changeHandler, symbol, value range, inputName
const FilterBar = ({
  title,
  symbol,
  valueOptions,
  groupName,
  handleFilter,
  resetFilter,
}) => {
  //On checkbox click, grab min/max for queryString to filter.
  function getValue() {
    let checkboxes = document.querySelectorAll(
      `input[name=${groupName}]:checked`
    );

    if (checkboxes.length) {
      let options = {
        min: checkboxes[0].value,
        max: checkboxes[checkboxes.length - 1].value,
      };
      handleFilter(groupName, options);
    } else {
      //This would clear the filter and refetch...
      resetFilter(groupName);
    }
  }

  function makeOptions() {
    let display = [];

    valueOptions.forEach((option, idx) => {
      let i = 0;
      let optionVal = [];
      while (i < idx + 1) {
        optionVal.push(symbol);
        i++;
      }
      display.push(optionVal);
    });
    return display;
  }

  let displaySymbols = makeOptions();
  return (
    <form className={s.filterForm} id="filterTest" onChange={getValue}>
      <fieldset className={s.filterFieldset}>
        <legend>{title}</legend>
        <div className={s.checkButtonContainer}>
          {valueOptions.map((val, idx) => {
            return (
              <div className={s.checkButton} key={idx}>
                <input
                  type="checkbox"
                  name={groupName}
                  value={val}
                  id={groupName + val}
                />
                <label
                  htmlFor={groupName + val}
                  className={s.filterLabel}
                  key={idx}
                >
                  {displaySymbols[idx].map((symbol, idx) => (
                    <span key={idx}>{symbol}</span>
                  ))}
                </label>
              </div>
            );
          })}
        </div>
      </fieldset>
    </form>
  );
};

export default FilterBar;
