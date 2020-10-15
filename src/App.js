import React, { useState, createContext } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import Home from './Components/HomePage/Home/Home';
import Login from './Components/login/Login';
import Order from './Components/Order/Order';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import ServiceLists from './Components/ServiceLists/ServiceLists';
import Review from './Components/Review/Review';
import AddService from './Components/Order/AddService/AddService';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  const [admin, setAdmin] = useState({});
  console.log(loggedInUser);
  return (
    <UserContext.Provider value={{ loggedInUser, setLoggedInUser, admin, setAdmin }}>
      <Router>
        <Switch>

          <Route path="/home">
            <Home></Home>
          </Route>

          <Route path="/login">
            <Login></Login>
          </Route>

          <PrivateRoute path="/order">
            <Order />
          </PrivateRoute>

          <PrivateRoute path="/Services/:id">
            <Order />
          </PrivateRoute>

          <PrivateRoute path="/ServiceLists">
            <ServiceLists></ServiceLists>
          </PrivateRoute>

          <PrivateRoute path="/addService">
            <AddService />
          </PrivateRoute>

          <PrivateRoute path="/makeAdmin">
            <AddService />
          </PrivateRoute>

          <PrivateRoute path="/review">
            <Review></Review>
          </PrivateRoute>

          <Route exact path="/">
            <Home />
          </Route>

        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
