import React from 'react';
import s from './FilterBar.module.css';

//Pass in props for: LabelName, changeHandler, symbol, value range, inputName
const FilterBar = ({ title, symbol, valueOptions, groupName }) => {
  //On checkbox click, grab min/max for queryString to filter.
  function getValue() {
    let checkboxes = document.querySelectorAll(
      `input[name=${groupName}]:checked`
    );

    //"The querySelectorAll() method on the document interfaces MUST return a Nodelist:[] containing all matches in document order". Easy to get our range by grabbing first and last indices.value

    //If we have checkboxes checked, then run a new query to update the page
    //Otherwise clear it out and run the original query again;
    if (checkboxes.length) {
      console.log(checkboxes[0].value);
      console.log(checkboxes[checkboxes.length - 1].value);
    } else {
      //This would clear the filter and refetch...
      console.log('cleared');
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
        <div
          className={s.checkButtonContainer}
          // style={{
          //   width: '100%',
          //   display: 'flex',
          //   margin: '0 auto',
          //   justifyContent: 'center',
          // }}
        >
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
