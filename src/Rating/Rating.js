import React from 'react';

export default function Rating(props) {
  let value = Math.round(props.value);
  let { symbol, iconClass } = props;
  let rateVal = [];

  if (!value) {
    return <span className="NA">Not Rated</span>;
  }

  for (let i = 0; i < value; i++) {
    rateVal.push(symbol());
  }

  let ratingStyle = {
    display: 'flex',
    alignItems: 'center',
  };

  //Index is used for the key in the interest of avoiding redundancy and because these spans are not intended to be reordered at any time. Per reactjs.org/docs/lists-and-keys.
  return (
    <div style={ratingStyle}>
      {rateVal.map((val, idx) => {
        return (
          <span className={iconClass} key={idx}>
            {symbol()}
          </span>
        );
      })}
    </div>
  );
}
