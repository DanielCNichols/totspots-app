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

    console.log(checkboxes[0].value);
    console.log(checkboxes[checkboxes.length - 1].value);
  }

  function makeOptions() {
    let display = [];
    let thing = symbol();
    valueOptions.forEach((option, idx) => {
      let i = 0;
      let optionVal = [];
      while (i < idx + 1) {
        optionVal.push(thing);
        i++;
      }
      display.push(optionVal);
    });
    return display;
  }

  let displaySymbols = makeOptions();
  console.log(displaySymbols);
  return (
    <form id="filterTest" onChange={getValue}>
      <fieldset
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '200px',
          alignItems: 'space-between',
          justifyContent: 'space-between',
        }}
      >
        <legend>{title}</legend>
        {valueOptions.map((val, idx) => {
          return (
            <label key={idx}>
              <input type="checkbox" name={groupName} value={val} />
              {displaySymbols[idx].map((symbol, idx) => (
                <span key={idx}>{symbol}</span>
              ))}
            </label>
          );
        })}
      </fieldset>
    </form>
  );
};

export default FilterBar;
