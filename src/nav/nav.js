import React from 'react';
import { Link } from 'react-router-dom';
import TokenService from '../services/TokenService';
import './Nav.css'



export default class Nav extends React.Component {
  handleLogout = () => {
    TokenService.clearToken();
  };



  renderLogout() {
    return (
      <>
      <li className="Nav_login">
        <Link onClick={this.handleLogout} to="/">
          Logout
        </Link>
      </li>
      <li>
        <Link to="/account">
          Profile</Link>
      </li>
      </>
    );
  }

  renderLogin() {
    return (
      <li className="Nav_logout">
        <Link to="/login">Log in</Link>
      </li>
    );
  }

  render() {
    return (
      <nav>
        <ul>
          <li>
            <Link to="/">
              Home
            </Link>
          </li>
          <li>
            <Link to="/addVenue">Add Venue</Link>
          </li>
          {TokenService.hasToken() ? this.renderLogout() : this.renderLogin()}
        </ul>
      </nav>
    )
  }
}

