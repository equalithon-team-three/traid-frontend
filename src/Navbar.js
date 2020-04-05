import React from 'react';
import { NavLink } from 'react-router-dom';

const renderLoggedIn = ({ email }) => {
  return (
    <>
      <li className="nav-item">
        <span className="text-style-bold">Logged in as {email}</span>
      </li>

      <li className="nav-item">
        <NavLink to="/logout" className="nav-link">
          <span className="text-style-bold">Log out</span>
        </NavLink>
      </li>
    </>
  );
};

const renderLoggedOut = () => (
  <>
    <li className="nav-item">
      <NavLink to="/login" className="nav-link">
        <span className="text-style-bold">Log In</span>
      </NavLink>
    </li>

    <li className="nav-item">
      <NavLink to="/register" className="nav-link">
        <span className="text-style-bold">Sign Up</span>
      </NavLink>
    </li>
  </>
);

const Navbar = ({ authData }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <NavLink to="/" className="navbar-brand">
        <span className="logo text-style-bold">Traid</span>
      </NavLink>

      <button
        className="navbar-toggler remove-outline"
        type="button"
        data-toggle="collapse"
        data-target="#navbarColor01"
        aria-controls="navbarColor01"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>

      <div className="navbar-collapse collapse" id="navbarColor01">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <NavLink to="/" className="nav-link">
              <span className="text-style-bold">Home</span>{' '}
              <span className="sr-only">(current)</span>
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink to="/myposts" className="nav-link">
              <span className="text-style-bold">My Posts</span>
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink to="/about" className="nav-link">
              <span className="text-style-bold">About</span>
            </NavLink>
          </li>

          {authData.authenticated
            ? renderLoggedIn(authData)
            : renderLoggedOut(authData)}

          <li className="nav-item">
            <a
              className="nav-link"
              href="https://github.com/equalithon-team-three"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="text-style-bold">Source</span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
