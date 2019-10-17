import React from 'react';
import venuesContext from '../VenuesContext'
import ApiService from '../services/api-service';

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
    console.log(profile)
    return (
      <section className='filter-search'>
        <p>{profile.first_name} {profile.last_name}</p>
        <p>email</p>
        <p>{profile.username}</p>
        <div>
          Saved venues
        </div>
        <div>
          reviews history
        </div>
      </section>
    );
  }
}
