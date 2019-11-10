import React from 'react';

export default function Rating(props) {
  let value = Math.round(props.value);
  let symbol = props.symbol;
  let rateVal;
console.log(props)
  switch (value) {
    case 1:
      rateVal = <span>{`${symbol}`}</span>;
      break;
    case 2:
      rateVal = (
        <>
          <span>{`${symbol}`}</span>
          <span>{`${symbol}`}</span>
        </>
      );

      break;

    case 3:
      rateVal = (
        <>
          <span>{`${symbol}`}</span>
          <span>{`${symbol}`}</span>
          <span>{`${symbol}`}</span>
        </>
      );
      break;

    case 4:
      rateVal = (
        <>
          <span>{`${symbol}`}</span>
          <span>{`${symbol}`}</span>
          <span>{`${symbol}`}</span>
          <span>{`${symbol}`}</span>
        </>
      );
      break;

    case 5:
      rateVal = (
        <>
          <span>{`${symbol}`}</span>
          <span>{`${symbol}`}</span>
          <span>{`${symbol}`}</span>
          <span>{`${symbol}`}</span>
          <span>{`${symbol}`}</span>
        </>
      );
      break;

    default:
      rateVal = (
        <>
          <span className="NA">No reviews</span>
        </>
      );
  }

  return rateVal;
}
