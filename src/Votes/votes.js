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
    return (
      <div className='votes'>
        <p>Was this review helpful?</p>
        <span>{review.count} person liked this</span>
        <button value='true' onClick={this.handleVote}>
        Like</button>
      </div>
    );
  }
}
