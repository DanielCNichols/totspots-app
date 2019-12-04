import React from 'react';
import venuesContext from '../VenuesContext';
import ApiService from '../services/api-service';
import FavoritesList from '../FavoritesList/Favoriteslist';
import ReviewsList from '../ReviewsList/ReviewsList';
import './Profileview.css';

export default class ProfileView extends React.Component {
  static contextType = venuesContext;

  componentDidMount() {
    this.context.clearError();
    ApiService.getProfile()
      .then(profile => {
        this.context.setProfile(profile);
      })
      .catch(this.context.setError);
  }

  componentWillUnmount() {
    this.context.clearError();
  }

  renderError() {
    let error = this.context.error;
    if (this.context.error) {
      return (
        <div className="error">
          <p>Sorry something has gone wrong. {error.error}</p>
        </div>
      );
    }
  }

  render() {
    const { profile } = this.context;
    return (
      <section className="profileview">
        <header>
          <h3>Your Profile</h3>
        </header>
        <div role="alert">{this.renderError()}</div>
        <div className="profile_info">
          <p>
            Name: {profile.first_name} {profile.last_name}
          </p>
          <p>Email: {profile.email}</p>
          <p>UserName: {profile.username}</p>
        </div>
        <div>
          <FavoritesList></FavoritesList>
        </div>
        <div>
          <ReviewsList></ReviewsList>
        </div>
      </section>
    );
  }
}
