import React from 'react';
import venuesContext from '../VenuesContext'
import ApiService from '../services/api-service';
import FavoritesList from '../FavoritesList/Favoriteslist';
import ReviewsList from '../ReviewsList/ReviewsList'
import './Profileview.css'

export default class ProfileView extends React.Component {
  static contextType = venuesContext;

  componentDidMount() {
    ApiService.getProfile()
    .then(profile => {
      this.context.setProfile(profile)
    })
    .catch(this.context.setError)
  }


  render() {
    const {profile} = this.context
    return (
      <section className="profileview">
        <header>
          <h3>Your profile</h3>
        </header>
        <p>Name: {profile.first_name} {profile.last_name}</p>
        <p>Email: {profile.email}</p>
        <p>UserName: {profile.username}</p>
        <span>{profile.city}, {profile.state}</span>
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
