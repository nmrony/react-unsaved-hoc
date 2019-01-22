import React from 'react';
import { Link } from 'react-router-dom';

const MainMenu = () => {
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-start">
        <Link to="/" className="navbar-item">
          home
        </Link>{' '}
        <Link to="/contact" className="navbar-item">
          contact
        </Link>
      </div>
    </nav>
  );
};

export default MainMenu;
