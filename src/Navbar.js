import React from 'react';
import { NavLink } from 'react-router-dom';

const renderLoggedIn = ({ email }) =>  <>
                        <li className="nav-item">
                            <span className="text-style-bold">Logged in as { email }</span>
                        </li>

                        <li className="nav-item">
                          <NavLink to="/logout" className="nav-link">
                            <span className="text-style-bold">Log out</span>
                          </NavLink>
                        </li>
                      </>


const renderLoggedOut = () => <>
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
            <NavLink to="/items" className="nav-link">
              <span className="text-style-bold">Items</span>
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink to="/tasks" className="nav-link">
              <span className="text-style-bold">Tasks</span>
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink to="/about" className="nav-link">
              <span className="text-style-bold">About</span>
            </NavLink>
          </li>

          { authData.authenticated ? renderLoggedIn(authData) : renderLoggedOut(authData) } 

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

        <form className="form-inline my-2 my-lg-0">
          <input
            className="form-control mr-sm-2"
            type="text"
            placeholder="Search"
          />

          <button className="btn btn-secondary my-2 my-sm-0" type="submit">
            Search
          </button>
        </form>
      </div>
    </nav>
  );
};

export default Navbar;
