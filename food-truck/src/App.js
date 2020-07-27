import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";
import Header from "./components/Header";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Food from "./components/Food";

function App() {
  return (
    <Router>
      <div className='App'>
        <Header />
        <Switch>
          <Route exact path='/' />
          <Route path='/login' component={Login} />
          <Route path='/signup' component={Signup} />
          <Route path='/food' component={Food} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
