import React from 'react';
import { Link } from 'react-router-dom';
import TokenService from '../services/TokenService';
import { ReactComponent as Logo } from '../assets/default-monochrome.svg';
import './nav.css';

export default class Nav extends React.Component {
  handleLogout = () => {
    TokenService.clearToken();
  };

  renderLogout() {
    return (
      <>
        <li className='Nav_login'>
          <Link onClick={this.handleLogout} to='/'>
            Logout
          </Link>
        </li>
        <li>
          <Link to='/account'>Profile</Link>
        </li>
      </>
    );
  }

  renderLogin() {
    return (
      <li className='Nav_logout'>
        <Link to='/login'>Log in</Link>
      </li>
    );
  }

  render() {
    return (
      <nav>
        <Logo
          style={{
            color: 'white',
            width: '150px',
            marginLeft: '10px',
          }}
        />
        <ul>
          <li></li>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/addVenue'>Add Venue</Link>
          </li>
          {TokenService.hasToken() ? this.renderLogout() : this.renderLogin()}
        </ul>
      </nav>
    );
  }
}
