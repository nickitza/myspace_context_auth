import React from "react";
import { Container } from "semantic-ui-react";
import FetchUser from './components/FetchUser'
import Home from "./components/Home";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import NoMatch from "./components/NoMatch";
import ProtectedRoute from './components/ProtectedRoute'
import Register from "./components/Register";
import { Route, Switch } from "react-router-dom";
import LikedRobots from './components/LikedRobots'

const App = () => (
  <>
    <Navbar />
    <FetchUser>
      <Container>
        <Switch>
          <ProtectedRoute exact path="/" component={ Home } />
          <ProtectedRoute exact path="/my_robots" component={ LikedRobots} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route component={NoMatch} />
        </Switch>
      </Container>
    </FetchUser>
  </>
);

export default App;
