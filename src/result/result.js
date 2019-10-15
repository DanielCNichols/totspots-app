import React from 'react'
import Review from '../review/review'


export default function Result() {

  return(
    <div> 
      <ul>
      <li className="result compact">
        {/* in this li, map over data
        and then add reviews component which gets mapped. */}
        <h3>What people are saying: </h3>
        <Review></Review>
        
      </li>
    </ul>
    </div>
  )
}