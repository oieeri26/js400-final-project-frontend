import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import Login from './auth/Login.Form';

function App() {
  return (
    <div>
      <Router>
        <Login />
      </Router>
    </div>
  );
}

export default App;
