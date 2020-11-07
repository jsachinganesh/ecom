import React, { Component } from 'react'
import './App.css';

import { Route, Switch } from 'react-router-dom';
import HomePage from './pages/homepage/HomePage';
import ShopPage from './pages/shop/Shop';
import Header from './components/header/Header.jsx';
import signInAndSignOut from './pages/signInAndSignOut/signInAndSignOut';




import { auth } from './firebase/firebaseUtils';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      currentUser:null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth =  auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={ this.state.currentUser}/> 
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop" component={ShopPage} />
          <Route exact path="/signin" component={signInAndSignOut} />
        </Switch>
    </div>
    )
  }
}



