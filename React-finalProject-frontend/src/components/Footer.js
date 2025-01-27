import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../src/css/Footer.css';

export default function Footer() {
  return (
    <div className='footer-container'>
      <ul>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
      </ul>
      <div>©Group 7, 2023</div>
    </div>
  )
}

