import React from 'react';

export default function FormSelect(props) {
  let {value, name, id, className, option} = props;
  let dispOption = [];

  for (let i = 0; i <= value; i++) {
    if (i === 0) {
      dispOption.push('Please select');
    } else {
      dispOption.push(i);
    }
  }

  return (
    <select name={name} i={id} className={className} >
    {dispOption.map(option => {
      if (option === 0) {
        return (
          <option key={0} value="">
          {option}
          </option>
          );
        }
        return (
          <option key={option} value={option}>
          {`${option}`}
        </option>
      );
    })}
    </select>
  )
}
