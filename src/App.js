import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
} from 'react-router-dom';
import './styles/App.css';
import LoginStatus from './components/auth/login_status';
import Welcome from './components/welcome';

import firebase from 'firebase';

class App extends Component {
  componentWillMount() {
    // Listen for Auth Changes
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.props.loginPersist(user);
      } else {
        this.props.logout();
      }
    });
  }

  render() {
    return (
      <Router>
        <div className="app">
          <Route
            exact={true}
            path="/"
            render={() =>
              this.props.loggedIn ? <Redirect to="/auth-route" /> : <Welcome />}
          />
          <Route path="/auth-route" component={LoginStatus} />
        </div>
      </Router>
    );
  }
}

export default App;
