import React, {FC} from 'react';
import {useLocation} from 'react-router-dom';
import {
  Navigate
} from 'react-router-dom';

const jwt = require('jsonwebtoken');

const isAuthenticated = () => {
  const infoUserToken = jwt.decode(localStorage.getItem('token'));
  return !!(infoUserToken && infoUserToken.authenticated !== false);
};

const PrivateRoute:FC< { children: React.ReactNode }>  = ({children}) => {
  const location = useLocation();
  if (!isAuthenticated()) {
    return <Navigate to="/" replace state={{from: location}}/>;
  }
  return <>
    {children}
    </>;
};

export default PrivateRoute;