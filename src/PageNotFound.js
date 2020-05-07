// Imports
import React from 'react';
import { NavLink } from 'react-router-dom';

// Component
const PageNotFound = () => {
  return (
    <div className="text-center board">
      <div className="card page-not-found-container">
        <h4 className="text-style-bold">404 - Page Not Found</h4>

        <div className="page-not-found-message">This route does not exist.</div>

        <NavLink to="/">
          <span className="text-style-bold">← Back To Home</span>
        </NavLink>
      </div>
    </div>
  );
};

export default PageNotFound;
