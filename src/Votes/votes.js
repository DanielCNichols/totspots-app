import React from 'react';
import ApiService from  '../services/api-service'
import VenuesContext from '../VenuesContext'

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
        <button value='-1' onClick={this.handleVote}>
          Thumbs up</button>
        <button value='1' onClick={this.handleVote}>
          Thumbs down</button>
      </div>
    );
  }
}
