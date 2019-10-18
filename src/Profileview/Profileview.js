import React from 'react';
import venuesContext from '../VenuesContext'
import ApiService from '../services/api-service';
import FavoritesList from '../FavoritesList/Favoriteslist';
import ReviewsList from '../ReviewsList/ReviewsList'

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
      <section className='filter-search'>
        <p>{profile.first_name} {profile.last_name}</p>
        <p>email</p>
        <p>{profile.username}</p>
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
