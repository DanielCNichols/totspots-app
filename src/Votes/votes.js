import React from 'react';
import ApiService from '../services/api-service';
import VenuesContext from '../VenuesContext';
import './Votes.css';

export default class Votes extends React.Component {
  static contextType = VenuesContext;

  state = {
    count: parseInt(this.props.review.count),
    clicked: false,
  }

  updateVoteCount() {
    this.setState({
      count: parseInt(this.state.count) +1,
      clicked: true
    })
  }

  handleVote = ev => {
    let vote = ev.target.value;
    let id = this.props.review.id;
    ApiService.handleVotes(vote, id)
    .then(() => {
      this.updateVoteCount();
    })
    .catch(error => {
      this.context.setError(error)
      console.error(error)
    })
  };

  renderVote() {
    const {count} = this.state
    if (!count) {
      return (
        <span>0 people like this review</span>
      )
    } else if (count === '1') {
      return (
        <span>1 person likes this review</span>
      )
    }
    return (
      <span>{count} people like this review</span>
    )
  }

  render() {
    return (
      <div className="votes">
        <p>Was this review helpful?</p>
        {this.renderVote()}
        <button  disabled={this.state.clicked} value="true" onClick={this.handleVote}>
          Like
        </button>
      </div>
    );
  }
}
