import React from 'react'
import Result from '../result/result'
import ApiService from '../services/api-service'

export default class ResultsPage extends React.Component {



  //Gonna need to fetch the relevant reviews and display them using props.
  //Use an API service method to do this. 
  //might need to set up some context for this part.  

render() {
  return (
    <section class= "main" role='main'>

      {/* Maybe split into another component?  */}
      <header>
        <h2>Results for Durham, NC</h2>
      </header>
      <div class="addvenue">
        <p>Is something missing?</p>
        <a href="addvenue.html"><button>Suggest a new venue</button></a>
      </div>
        
        {/* Will need to map over the result component.  */}
        <Result></Result>
      <ul>
        <li class="result compact">
          <h2>HiWire Brewing</h2>
          <p>800 Taylor St. Durham, NC 27701</p>
          <p>Overall: 1/5</p>
          <p>Price: $$$$</p>
          <button>Expand</button>
        </li>
        <li class="result expanded">
          <h2>Bull McCabe's</h2>
          <p>427 W Main St. Durham, NC 27704</p>
          <p>Overall: 5/5</p>
          <p>Price: $$</p>
          <p>Type: Bar/Brewery</p>
          <p>Volume Level: Restaurant</p>
          <div class="amenities">
            <h3>Amenities</h3>
            <ul>
              <li>Play Area</li>
              <li>Toys (5+)</li>
              <li>Dogs Welcome</li>
              <li>Stroller Accessible</li>
              <li>Changing Table</li> 
              <li>Outdoor Seating</li>
            </ul>
          </div>
          <h3>What people are saying: </h3>
          <div class="review">
            <h4>One of the Bull City's Best!</h4>
            <p>Kelley Breeze - SuperUser</p>
            <p>Date visited: 1/28/2014</p>
            <div class="reviewText">
            <p>We love Bull McCabes! This was a favorite before we had our little one and I can recommend it highly enough! We go every friday with some friends from work who also have kids, and it is always easy to get in and out of. They also have changing tables and the staff is super friendly (and quick!). They have a great outdoor area with a big connect-four game and a big fenced-in area for kids to play in, while still within sight of parents. Best way to wrap up a work week!</p>
            </div>
          </div>
          <div class="votes">
            <p>Was this review helpful?</p>
            <button>Thumbs up <span>4010</span></button>
            <button>Thumbs down<span>1</span></button>
            <button>Add to favorites</button>
            <a href="reviewform.html"><button>Add a review</button></a>
          </div>
        </li>
      </ul>
    </section>
    )
  }
}