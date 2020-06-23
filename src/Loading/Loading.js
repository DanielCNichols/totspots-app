import React from 'react';
import ReactLoading from 'react-loading';
import './Loading.css';

export default function Loading() {
  return (
    <div className="Loading">
      <ReactLoading type="spin" color="#064789" width={'200px'} />
      <p>Loading...</p>
    </div>
  );
}
