import React, { useEffect } from 'react';
import Adapter from './Adapter';

const LogOut = ({ setAuthenticated }) => {

  useEffect(() => {
    Adapter.logOut(setAuthenticated)
  }, [])

  return <span>Logging out...</span>
}



export default LogOut;