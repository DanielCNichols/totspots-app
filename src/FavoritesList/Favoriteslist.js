import React, {Component} from 'react';
import venuesContext from '../VenuesContext'
import ApiService from '../services/api-service'
import Favorites from '../favorites/Favorites'
import './Favoriteslist.css'


export default class FavoritesList extends Component  {
  static contextType = venuesContext

  componentDidMount() {
    ApiService.getFavorites()
    .then(favorites => {
      this.context.setFavorites(favorites)
    })
    .catch(this.context.setError)
  }

  render() {
    let {favorites} = this.context
    return(
      <section>
        <header>
          <h3>Your saved venues</h3>
        </header>
        <div>
          <ul>
          {favorites.map((favorites =>(
              <Favorites favorites={favorites} key={favorites.id} />
          )))}
          </ul>
        </div>
      </section>

    )
  }
}