// Imports
import React from 'react';
import { NavLink } from 'react-router-dom';

// Component
const PageNotFound = () => {
  return (
    <div className="card">
      <h4 className="text-style-bold">404 - Page Not Found</h4>

      <div>This route does not exist.</div>

      <NavLink to="/">
        <span className="text-style-bold">← Back To Home</span>
      </NavLink>
    </div>
  );
};

export default PageNotFound;
