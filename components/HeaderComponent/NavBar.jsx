import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  const logo = (
    <div className="logo-container">
      <img className="logo" src="./../assets/logo-white.png" alt="logo" />
    </div>
  );

  const textBox = (
    <div className="text-box">
      <h1 className="heading-primary">
        <span className="heading-primary-main">outdoors</span>
        <span className="heading-primary-sub">is where I belong</span>
      </h1>
    </div>
  );

  return (
    <header className="header">
      {logo}
      {textBox}
      {/* <ul className="unstyled">
        <li className="navButton"><Link to="">Home</Link></li>
        <li className="navButton"><Link to="other">Other</Link></li>
      </ul> */}
    </header>
  );
}

export default NavBar;
