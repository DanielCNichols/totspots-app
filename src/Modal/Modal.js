import React from 'react';
import './Modal.css';
export default class Modal extends React.Component {
  render() {
    return (
      <div className="Modal">
        <header>
          <h1>Welcome to Totspots!</h1>
        </header>
        <p>
          Totspots is a reviews app that helps parents to find kid-friendly
          places to hang out in their town. Here parents can find need-to-know
          information like:
        </p>
        <ul>
          <li>Are there changing tables?</li>
          <li>Is it stroller accessible?</li>
          <li>Are there kid's specials?</li>
        </ul>

        <p>If you would like to log in to demo adding a review or venue, voting on helpful reviews, and saving favorite venues please use the following login: 
          <br />
          username: Daniel
          <br />
          password: password

        </p>

        <p>
          Please note that presently search results are limited to our pilot
          city, Durham NC. We are planning to expand this project, so check back
          soon for updates on your town.
        </p>

        <p>Thanks for using Totspots!</p>
        <button onClick={this.props.close}>close</button>
      </div>
    );
  }
}
