import React from 'react'
import ApiService from '../services/api-service';
import VenuesContext from '../VenuesContext'
import './Favorites.css'
import {Link} from 'react-router-dom'

class Favorites extends React.Component {
  static contextType = VenuesContext

  deleteFavorite(id, callback) {
    ApiService.deleteFavorite(id)
    .then((favorites) => {
      callback(id);
    })
    .catch((this.context.setError))
  }

  render() {
    let { favorites } = this.props;
    return (
      <li className="favorite" key={favorites.id}>
        <h3>{favorites.venue_name}</h3>
        <p>{favorites.venue_type}</p>
        <p>{favorites.address}</p>
        <span>{favorites.city}</span>, <span>{favorites.state} </span> 
        <span>{favorites.zipcode}</span>
        <p>{favorites.url}</p>
        <p>{favorites.phone}</p>
        <button onClick={() => this.deleteFavorite(favorites.id, this.context.deleteFavorite)}>Remove</button>
      </li>
    );
  }
}

export default Favorites;
