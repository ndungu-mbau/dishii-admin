import React from 'react'

import {
  HashRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import Navbar from "./components/navbar"

import admin from "./admin"
import client from "./client"
import cashier from "./cashier"

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/admin" component={admin} />
        <Route path="/cashier" component={cashier} />
        <Route path="/client" component={client} />
      </Switch>
    </Router>
  );
}

export default App;
