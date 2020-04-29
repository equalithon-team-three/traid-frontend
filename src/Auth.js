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
  // controlled inputs
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
    <>
      <h2>{loggingIn ? 'Log In' : 'Sign up'}</h2>
      {errors.length ? renderErrors(errors) : null}
      <form
        onSubmit={e => {
          e.preventDefault();
          onSubmit(loggingIn, formData, setErrors, setAuthenticated);
        }}
      >
        <ul>
          <li>
            <label htmlFor="email">Email</label>
            <input
              type="text"
              id="email"
              name="email"
              onChange={inputChanged}
            />
          </li>

          <li>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              onChange={inputChanged}
            />
          </li>
        </ul>

        <input type="submit" />
      </form>
      <a href='http://localhost:3000/auth/google_oauth2'>Log in with G</a>
    </>
  );
};

export default Auth;
