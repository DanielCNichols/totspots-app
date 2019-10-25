import React from 'react';
import ApiService from  '../services/api-service'
import VenuesContext from '../VenuesContext'
import './Votes.css'

export default class Votes extends React.Component {
  static contextType= VenuesContext

  handleVote = ev => {
    let vote = ev.target.value;
    let id= this.props.review.id
    ApiService.handleVotes(vote, id)
  }
  

  render() {
   const {review} = this.props

   //Get an accurate vote count since DB defaults to true in order to return votes in query. 
   let votes = (review.count -1)
    return (
      <div className='votes'>
        <p>Was this review helpful?</p>
        <span>{votes} people liked this</span>
        <button value='true' onClick={this.handleVote}>
        Like</button>
      </div>
    );
  }
}
