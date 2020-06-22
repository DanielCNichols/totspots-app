import React from 'react';
import { Link } from 'react-router-dom';
import TokenService from '../services/TokenService';
import { ReactComponent as Logo } from '../assets/default-monochrome.svg';
import './Nav.css';

export default class Nav extends React.Component {
  handleLogout = () => {
    TokenService.clearToken();
  };

  renderLogout() {
    return (
      <>
        <li className="Nav_login">
          <Link onClick={this.handleLogout} to="/">
            <button type="button">Sign out</button>
          </Link>
        </li>
        <li>
          <Link to="/account">Profile</Link>
        </li>
      </>
    );
  }

  renderLogin() {
    return (
      <>
        <li className="Nav_logout">
          <Link to="/login">Log in</Link>
        </li>
        <Link to="/register">
          <button type="button">Sign Up</button>
        </Link>
      </>
    );
  }

  render() {
    return (
      <nav>
        <Link to="/">
          <Logo
            style={{
              color: 'white',
              width: '150px',
              marginLeft: '10px',
            }}
          ></Logo>
        </Link>
        <ul>
          {TokenService.hasToken() ? this.renderLogout() : this.renderLogin()}
        </ul>
      </nav>
    );
  }
}
