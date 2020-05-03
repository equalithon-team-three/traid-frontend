import React, { useState } from 'react';
import Adapter from './Adapter';

const onSubmit = (loggingIn, formData, setErrors, setAuthenticated) => {
  const methodName = loggingIn ? 'logIn' : 'signUp';

  Adapter[methodName](formData, data => {
    setErrors(data.errors || []);

    if (data.authenticated) {
      setAuthenticated(data);
    }
  });
};

const renderErrors = errors => (
  <ul>
    {errors.map(error => (
      <li key={error}>{error}</li>
    ))}
  </ul>
);

const Auth = ({ loggingIn, setAuthenticated }) => {
  const authType = loggingIn ? 'Log In' : 'Sign Up';

  // Controlled inputs
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState([]);

  const inputChanged = ({ target }) =>
    setFormData({
      ...formData,
      [target.name]: target.value,
    });

  return (
    <div className="text-center board">
      <h2 className="post-category-header">{authType}</h2>

      <form
        className="auth-form"
        onSubmit={e => {
          e.preventDefault();
          onSubmit(loggingIn, formData, setErrors, setAuthenticated);
        }}
      >
        <ul>
          <li>
            <label htmlFor="email">Email: </label>

            <input
              type="text"
              id="email"
              name="email"
              autoComplete="email"
              onChange={inputChanged}
            />
          </li>

          <li>
            <label htmlFor="password">Password: </label>

            <input
              type="password"
              id="password"
              name="password"
              autoComplete="password"
              onChange={inputChanged}
            />
          </li>
        </ul>

        <button
          className="btn btn-success btn-lg btn modal-button text-style-bold"
          type="submit"
        >
          {authType}
        </button>

        {errors.length ? renderErrors(errors) : null}
      </form>

      <a
        className="google-oauth"
        href={process.env.REACT_APP_BACKEND_OAUTH_URL}
      >
        {`${authType} with Google`}
      </a>
    </div>
  );
};

export default Auth;
