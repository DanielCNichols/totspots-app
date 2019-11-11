import React from 'react';

export default function Rating(props) {
  let value = Math.round(props.value);
  let symbol = props.symbol;
  let rateVal = [];

  if (!value) {
    return <span className="NA">Not Rated</span>;
  }
  
  for (let i = 0; i < value; i++) {
    rateVal.push(symbol);
  }

  //Index is used for the key in the interest of avoiding redundancy and because these spans are not intended to be reordered at any time. Per reactjs.org/docs/lists-and-keys.
  return rateVal.map(idx => {
    return <span key={idx}>{`${symbol}`}</span>;
  });
}
