import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const links = [
    {
      id: 1,
      path: '/',
      text: 'Home',
    },
    {
      id: 2,
      path: '/Categories',
      text: 'Categories',
    },
  ];

  return (
    <nav className="navBar">
      <h1>BookStore CMS</h1>
      <ul className="menuNav">
        {links.map((link) => <li key={link.id}><NavLink to={link.path} activeClassName="active-link" key={link.id} exact>{link.text}</NavLink></li>)}
      </ul>
    </nav>
  );
};

export default Navbar;
