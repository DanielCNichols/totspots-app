import React from 'react'

class Favorites extends React.Component {

  handleRemove(id) {
    //call api to remove
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
        <button onClick={() => this.handleRemove(favorites.id)}>See More</button>
        <button onClick={() => this.handleRemove(favorites.id)}>Remove from favorites</button>
      </li>
    );
  }
}

export default Favorites;
