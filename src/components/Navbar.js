import React from 'react';
import s from '../sass/components/Navbar.module.scss';

export default function Navbar(props) {
  return (
    <nav className={s.navbar}>
      <div className={s.logo}>Totspots</div>
      <ul className={s.navLinks}>
        <li onClick={props.toggleLogin}>Login</li>
        <li>Sign up</li>
      </ul>
    </nav>
  );
}
