import React from 'react';
import {Routes, Route} from 'react-router-dom';
import PrivateRoute from './routing/PrivateRoute';
import AuthorizationComponent from './components/AuthorizationComponent';
import UserComponent from './components/UsersComponent';
import {Provider} from 'react-redux';
import store from './store/store';

function App() {

  return (
    <Provider store={store}>
      <Routes>
        <Route
          path="users"
          element={
            <PrivateRoute>
              <UserComponent/>
            </PrivateRoute>
          }
        />
        <Route
          path="/"
          element={
            <AuthorizationComponent/>
          }
        />
      </Routes>
    </Provider>
  );
}

export default App;
