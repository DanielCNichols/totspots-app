import React from 'react'
import ApiService from '../services/api-service';
import VenuesContext from '../VenuesContext'
import './Favorites.css'

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
        <p className="type">{favorites.venue_type}</p>
        <p>{favorites.address}</p>
        <span className="city">{favorites.city}</span>, <span className="state">{favorites.state} </span> 
        <span>{favorites.zipcode}</span>
        <p>{favorites.url}</p>
        <p>{favorites.phone}</p>
        <button onClick={() => this.deleteFavorite(favorites.id, this.context.deleteFavorite)}>Remove</button>
      </li>
    );
  }
}

export default Favorites;
