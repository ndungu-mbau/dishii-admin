import React from 'react'

import { ApolloProvider } from "@apollo/client"

import {
  HashRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import apolloClient from "./utils/client"

import Navbar from "./components/navbar"

import admin from "./admin"
import client from "./client"
import cashier from "./cashier"

function App() {
  return (
    <ApolloProvider client={apolloClient}>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/admin" component={admin} />
          <Route path="/cashier" component={cashier} />
          <Route path="/client" component={client} />
        </Switch>
      </Router>
    </ApolloProvider>
  );
}

export default App;
