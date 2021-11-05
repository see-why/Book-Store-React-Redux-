import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const links = [
    {
      id: 1,
      path: '/',
      text: 'Books',
    },
    {
      id: 2,
      path: '/Categories',
      text: 'Categories',
    },
  ];

  return (
    <nav className="navBar">
      <div className="links-Container">
        <h1>BookStore CMS</h1>
        <ul className="menuNav">
          {links.map((link) => <li key={link.id}><NavLink to={link.path} activeClassName="active-link" key={link.id} exact>{link.text}</NavLink></li>)}
        </ul>
      </div>
      <div className="avatar-container"><i className="fas fa-user" /></div>
    </nav>
  );
};

export default Navbar;
