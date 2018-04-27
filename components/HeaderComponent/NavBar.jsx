import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <header className="header">
      <ul className="unstyled">
        <li className="navButton"><Link to="">Home</Link></li>
        <li className="navButton"><Link to="other">Other</Link></li>
      </ul>
    </header>
  );
}

export default NavBar;
