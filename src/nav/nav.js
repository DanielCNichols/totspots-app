import React from 'react';
import { Link } from 'react-router-dom';
import TokenService from '../services/TokenService';

export default class Nav extends React.Component {
  handleLogout = () => {
    TokenService.clearToken();
  };

  renderLogout() {
    return (
      <div className='Nav_login'>
        <Link onClick={this.handleLogout} to='/'>
          Logout
        </Link>
        <Link to ='/account'>
          Profile
        </Link>
      </div>
    );
  }

  renderLogin() {
    return (
      <div className='Nav_logout'>
        <Link to='/login'>Log in</Link>
      </div>
    );
  }

  render() {
    return (
      <nav>
        <h1>
          <Link to ='/'>
            Home
          </Link>
          </h1>
          {TokenService.hasToken() ? this.renderLogout() : this.renderLogin()}
      </nav>

    ) 
  }
}

