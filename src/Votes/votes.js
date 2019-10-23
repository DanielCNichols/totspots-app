import React from 'react';
import ApiService from  '../services/api-service'
import VenuesContext from '../VenuesContext'
import './votes.css'

export default class Votes extends React.Component {
  static contextType= VenuesContext

  handleVote = ev => {
    let vote = ev.target.value;
    let id= this.props.review.id
    ApiService.handleVotes(vote, id)
  }
  

  render() {
    return (
      <div className='votes'>
        <p>Was this review helpful?</p>
        <span>(VoteCount) liked this</span>
        <button value='true' onClick={this.handleVote}>
        Like</button>
      </div>
    );
  }
}
