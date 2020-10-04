import React from 'react'

import { ApolloProvider } from "@apollo/client"

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import apolloClient from "./utils/client"

import admin from "./admin"
import client from "./client"
import cashier from "./cashier"

function App() {
  return (
    <ApolloProvider client={apolloClient}>
      <Router>
        <Switch>
          <Route path="/admin" component={admin} />
          <Route path="/cashier" component={cashier} />
          <Route path="/" component={client} />
        </Switch>
      </Router>
    </ApolloProvider>
  );
}

export default App;
