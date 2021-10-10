import React from 'react';
import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css"
import "./index.css"

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import Home from './pages/Home';
//import HomePage from './pages/HomePage';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Footer from './components/Footer';
import Product from './pages/Product';
import Cart from './pages/Cart'
import Navbar from "./components/Navbar";
import Backdrop from "./components/Background";
import SideMenu from './components/Sidemenu';

// Construct our main GraphQL API endpoint
const httpLink = createHttpLink({
  uri: '/graphql',
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  const [sideToggle, setSideToggle] = useState(false);

  return (
    <ApolloProvider client={client}>
      <Router>
        <Navbar click={() => setSideToggle(true)} />
        <SideMenu show={sideToggle} click={() => setSideToggle(false)} />
        <Backdrop show={sideToggle} click={() => setSideToggle(false)} />

        <Switch>
          <div className="flex-column justify-flex-start min-100-vh">
            <div className="container">
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/login">
                <Login />
              </Route>
              <Route exact path="/signup">
                <Signup />
              </Route>
              <Route exact path="/me">
                <Profile />
              </Route>
              <Route exact path="/users/:id">
                <Profile />
              </Route>
              <Route exact path="/product/:id">
                <Product />
              </Route>
              <Route exact path="/cart">
                <Cart />
              </Route>
            </div>
            <Footer />
          </div>
        </Switch>

      </Router>
    </ApolloProvider>
  );
}

export default App;
