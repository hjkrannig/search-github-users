import React from 'react';
import { Dashboard, Login, PrivateRoute, AuthWrapper, Error, Landing,
   NotAllowed, } from './pages';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ROUTES as page } from './utils.js/constants';

function App() {
  return (
    <AuthWrapper>
      <BrowserRouter>
        <Routes>
          <Route path={page.dashboard} element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
          } />
          <Route path={page.login} element={<Login />}/>
          <Route path={page.landing} element={<Landing />}/>
          <Route path={page.not_allowed} element={<NotAllowed />}/>
          <Route path='*' element={ <Error />}/>
        </Routes>
      </BrowserRouter >
    </AuthWrapper>
  );
}

export default App;
