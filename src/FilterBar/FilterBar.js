import React from 'react';
import s from './FilterBar.module.css';
import { MdFullscreenExit } from 'react-icons/md';

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
  console.log(displaySymbols);
  return (
    <div style={{ width: '100%', margin: '0 auto', boxSizing: 'border-box' }}>
      <form
        style={{ width: '90%', margin: '0 auto' }}
        id="filterTest"
        onChange={getValue}
      >
        <fieldset
          style={{
            // width: '90%',
            margin: '0 auto',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <legend>{title}</legend>
          <div
            style={{
              width: '100%',
              display: 'flex',
              margin: '0 auto',
              justifyContent: 'center',
            }}
          >
            {valueOptions.map((val, idx) => {
              return (
                <label
                  style={{
                    display: 'flex',
                    border: '1px solid black',
                    width: '50px',
                    margin: '0',
                    height: '25px',
                    padding: '0 5px',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textAlign: 'center',
                    fontSize: '.8em',
                  }}
                  key={idx}
                >
                  <input
                    style={{ opacity: 0, position: 'absolute', left: '100vw' }}
                    type="checkbox"
                    name={groupName}
                    value={val}
                  />
                  {displaySymbols[idx].map((symbol, idx) => (
                    <span key={idx}>{symbol}</span>
                  ))}
                </label>
              );
            })}
          </div>
        </fieldset>
      </form>
    </div>
  );
};

export default FilterBar;
