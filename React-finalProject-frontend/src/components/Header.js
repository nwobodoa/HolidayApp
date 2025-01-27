import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../src/logo.png';
import '../../src/css/Header.css';

export default function Header({ isLoggedIn, userFirstName, onLogout }) {
  const handleLogout = () => {
    onLogout();
  };

  return (
    <header className='header-container'>
      <div className="logo-container">
        <img src={logo} alt="logo" className="logo-image" />
      </div>
      <ul>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        {isLoggedIn ? (
          <>
            <li>Hello, {userFirstName}</li>
            <li><span className="sign-out" onClick={handleLogout}>Sign Out</span></li>
          </>
        ) : (
          <li><NavLink to="/login">Log In</NavLink></li>
        )}
      </ul>
    </header>
  );
}
