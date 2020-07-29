import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ReactQueryDevtools } from "react-query-devtools";
import UserContext from "./contexts/UserContext";
import "./App.css";
import PrivateRoute from "./components/PrivateRoute";
import Header from "./components/Header";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Food from "./components/Food";

const initUser = {
  id: undefined,
  is_operator: false,
  name: "",
  username: "",
};

function App() {
  const [user, setUser] = React.useState(initUser);
  console.log("App -> User:", user);

  return (
    <Router>
      <UserContext.Provider value={{ user, setUser }}>
        <div className='App'>
          <Header />
          <Switch>
            <Route exact path='/' />
            <Route path='/login' component={Login} />
            <Route path='/signup' component={Signup} />
            <PrivateRoute path='/food' component={Food} />
          </Switch>
          <ReactQueryDevtools />
        </div>
      </UserContext.Provider>
    </Router>
  );
}

export default App;
