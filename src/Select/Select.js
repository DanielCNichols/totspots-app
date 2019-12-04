import React from 'react';

export default function FormSelect(props) {
  let {value, name, id, className, option, arialabel} = props;

  let dispOption = [];

  for (let i = 0; i <= value; i++) {
    if (i === 0) {
      dispOption.push('Please select');
    } else {
      let symbols = option;
      for (let j = 1; j < i; j++) {
        symbols += option;
      }
      dispOption.push(symbols);
    }
  }

  return (
    <select name={name} id={id} className={className} aria-label={arialabel} aria-required="true" required>
      {dispOption.map((option, index) => {
        if (index === 0) {
          return (
            <option key={index} value=''>
              {option}
            </option>
          );
        } else {
          return (
            <option key={index} value={index}>
              {option}
            </option>
          );
        }
      })}
    </select>
  );
}
