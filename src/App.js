import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Routes from './Routes';
import Adapter from './Adapter';

const App = () => {
  const [authData, setAuthData] = useState({});

  useEffect(() => {
    Adapter.authCheck(setAuthData);
  }, [setAuthData]);

  return (
    <div>
      <Navbar authData={authData} />
      <Routes authData={authData} setAuthenticated={setAuthData} />
    </div>
  );
};

export default App;
