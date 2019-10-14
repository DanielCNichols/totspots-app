import React from 'react'
import { Link } from 'react-router-dom'

export default function Nav() {
  return (
    <nav>
      <div className="Nav_loggedin">
      <Link to="/account">Profile</Link>
      <Link to="/">Logout</Link>
      </div>
      <div className="Nav_notloggedin">
        <Link to="/login">Log in</Link>
        <Link to="/register">Sign up</Link>
        <Link to="/">Home</Link>
        </div>
      </nav>
  )
}
