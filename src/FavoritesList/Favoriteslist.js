import React, { Component } from 'react';
import venuesContext from '../VenuesContext';
import ApiService from '../services/api-service';
import Favorites from '../favorites/Favorites';
import './Favoriteslist.css';

export default class FavoritesList extends Component {
  static contextType = venuesContext;

  componentDidMount() {
    ApiService.getFavorites()
      .then(favorites => {
        this.context.setFavorites(favorites);
      })
      .catch(this.context.setError);
  }

  renderError() {
    let error = this.context.error
    if(this.context.error) {
      return (
        <div className="error">
          <p>Sorry something has gone wrong.{error.error}</p>
        </div>
      )
    }
  }


  prerender() {
    let { favorites, error } = this.context;
    if (favorites.length === 0) {
      return (
        <div>
          <p>You haven't saved any venues!</p>
        </div>
      );
    } 
    if (error) {
      return (
      <div role='alert'>
          {this.renderError()}
        </div>)
    }  else {
      return (
        <section>
          <header>
            <h3>Your saved venues</h3>
          </header>
          <div>
            <ul>
              {favorites.map(favorites => (
                <Favorites favorites={favorites} key={favorites.id} />
              ))}
            </ul>
          </div>
        </section>
      );
    }
  }

  render() {
    return <div>{this.prerender()}</div>;
  }
}
