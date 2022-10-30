import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";

import jwt_decode from "jwt-decode"
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";

import Navbar from "./components/layout/Navbar";
import LandingPage from "./components/layout/LandingPage";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";

import PrivateRoute from "./components/private-route/PrivateRoute";
import Dashboard from "./components/dashboard/Dashboard";

//Check token and keep user logged if present 
if(localStorage.jwtToken){
  const token = localStorage.jwtToken
  setAuthToken(token)

  //Decode and read token to retrieve user information
  const decoded = jwt_decode(token)

  store.dispatch(setCurrentUser(decoded))

  //Check token expiration - currentTime in milliseconds 
  const currentTime = Date.now() / 1000

  if(decoded.exp < currentTime) {
    store.dispatch(logoutUser())

    //Redirect user to login page
    window.location.href = "./login"
  }
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">

            <h1> Hello World</h1>
            <Navbar />
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Switch>
              <PrivateRoute exact path="/dashboard" component= {Dashboard} />
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}
export default App;