import React from 'react'

import { ApolloProvider } from "@apollo/client"

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import apolloClient from "./utils/client"
import { Store } from "./utils/state"

import index from "./index-page"
import admin from "./admin"
import client from "./client"
import cashier from "./cashier"

function App() {
  return (
    <ApolloProvider client={apolloClient}>
      <Store>
        <Router>
          <Switch>
            <Route path="/" exact component={index} />
            <Route path="/admin" component={admin} />
            <Route path="/cashier" component={cashier} />
            <Route path="/client" component={client} />
          </Switch>
        </Router>
      </Store>
    </ApolloProvider>
  );
}

export default App;
