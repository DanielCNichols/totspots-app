import React, { useState, useEffect } from 'react';
import ApiService from '../services/api-service';
import VenuesContext from '../VenuesContext';
import './Votes.css';
import TokenService from '../services/TokenService';
import { withRouter } from 'react-router-dom';
import { TiArrowUpOutline, TiArrowDownOutline } from 'react-icons/ti';

const Votes = ({ count }) => {
  return (
    <div>
      <TiArrowUpOutline />
      <span>{count}</span>
      <TiArrowDownOutline />
    </div>
  );
};

// class Votes extends React.Component {
//   static contextType = VenuesContext;

//   //Allows for accurate vote count with brand new reviews.
//   state = {
//     count: !this.props.review.count
//       ? (this.props.review.count = 0)
//       : parseInt(this.props.review.count),
//     clicked: false,
//   };

//   updateVoteCount() {
//     this.setState({
//       count: this.state.count + 1,
//       clicked: true,
//     });
//   }

//   handleVote = ev => {
//     if (!TokenService.hasToken() === true) {
//       this.props.history.push('/login');
//     } else {
//       let vote = ev.target.value;
//       let id = this.props.review.id;
//       ApiService.handleVotes(vote, id)
//         .then(vote => {
//           this.updateVoteCount(vote);
//         })
//         .catch(error => {
//           this.context.setError(error);
//         });
//     }
//   };

//   renderVote() {
//     const { count } = this.state;
//     if (!count) {
//       return <span>0 people like this review</span>;
//     } else if (count === '1') {
//       return <span>1 person likes this review</span>;
//     }
//     return <span>{count} people like this review</span>;
//   }

//   render() {
//     return (
//       <div className="votes">
//         <p>Was this review helpful?</p>
//         {this.renderVote()}
//         <button
//           disabled={this.state.clicked}
//           value="true"
//           onClick={this.handleVote}
//         >
//           Like
//         </button>
//       </div>
//     );
//   }
// }

export default withRouter(Votes);
