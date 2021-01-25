import './App.css';
import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from "./components/Navbar"
import Home from './components/Home'
import Checkout from './components/checkout'
import Login from './components/Login'
import Signup from './components/Signup'
import { connect } from 'react-redux'
import { auth } from './firebase'
import * as actionTypes from './store/action'

class App extends Component {
  componentDidMount() {
    auth.onAuthStateChanged((user) => {
      if (user) {
        this.props.loggedIn(user)
      } else {
        this.props.loggedOut()
      }
    })
  }
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route path="/checkout">
              <Navbar />
              <Checkout />
            </Route>
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            <Route path="/">
              <Navbar />
              <Home />
            </Route>
          </Switch>
        </div>
      </Router >
    );
  }
}

const mapStateToProps = state => {
  return {

  }
}
const mapDispatchToProps = dispatch => {
  return {
    loggedIn: (user) => dispatch({ type: actionTypes.SIGN_IN, user: user }),
    loggedOut: () => dispatch({ type: actionTypes.SIGN_OUT })
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(App);
