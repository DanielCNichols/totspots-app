import React from 'react';
import ApiService from '../services/api-service';
import VenuesContext from '../VenuesContext';
import './Favorites.css';
import {withRouter} from 'react-router-dom'

class Favorites extends React.Component {
  static contextType = VenuesContext;

  deleteFavorite(id, callback) {
    ApiService.deleteFavorite(id)
      .then(favorites => {
        callback(id);
      })
      .catch(this.context.setError);
  }

  handleVisit(id) {
    this.props.history.push(`/venue/${id}`)
  }

  render() {
    let { favorites } = this.props;
    return (
      <li className="favorite" key={favorites.id}>
        <h3>{favorites.venue_name}</h3>
        <div className="favorite_info">
          <p className="type">Type: {favorites.venue_type}</p>
          <p>Address: {favorites.address}
          <span className="city">{favorites.city}</span>,{' '}
          <span className="state">{favorites.state} </span>
          <span>{favorites.zipcode}</span>
          </p>
          <p className="link">Website:   
            <a href={favorites.url} rel="noopener noreferrer" target="_blank">
             <span>  {favorites.url}</span>
            </a>
          </p>
          <p>Phone: {favorites.phone}</p>
        </div>
        <div className="favorites_controls">
        <button className="visit" onClick={() =>{this.handleVisit(favorites.id)}}>See more</button>
        <button className="delete_favorite"
          onClick={() =>
            this.deleteFavorite(favorites.id, this.context.deleteFavorite)
          }
          >
          Remove
        </button>
          </div>
      </li>
    );
  }
}

export default withRouter(Favorites);
