import React from 'react'
import ApiService from '../services/api-service';
import VenuesContext from '../VenuesContext'

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
      <li key={favorites.id}>
        <h3>{favorites.venue_name}</h3>
        <p>{favorites.type}</p>
        <p>{favorites.address}</p>
        <span>{favorites.city}</span>, <span>{favorites.state}</span>
        <span>{favorites.zipcode}</span>
        {/* <button onClick={() => this.handleRemove(favorites.id)}>See More</button> */}
        <button onClick={() => this.deleteFavorite(favorites.id, this.context.deleteFavorite)}>Remove from favorites</button>
      </li>
    );
  }
}

export default Favorites;
