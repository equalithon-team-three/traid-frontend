import React, { useState } from 'react';
import Adapter from './Adapter';

const onSubmit = (loggingIn, formData) => {
  if (loggingIn)
    Adapter.logIn(formData, console.log)
  else
    Adapter.signUp(formData, console.log)
}

const Auth = ({ loggingIn }) => {

  // controlled inputs
  const [ formData, setFormData ] = useState({
    email: "",
    password: ""
  });

  const inputChanged = ({ target }) => setFormData({ ...formData, [target.name]: target.value }) 

  return <>
    <h2>{ loggingIn ? "Log In" : "Sign up" }</h2>
    <form onSubmit={ e => { e.preventDefault(); onSubmit(loggingIn, formData) } }>
      <ul>
        <li>
          <label htmlFor="email">Email</label>
          <input type="text" id="email" name="email" onChange={ inputChanged } />
        </li>
        <li>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" onChange={ inputChanged } />
        </li>
      </ul>
      <input type="submit" />
    </form>
  </>
}



export default Auth;