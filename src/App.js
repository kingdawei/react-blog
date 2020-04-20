import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Dashboard from "./components/dashboard/Dashboard";
import PostDetails from "./components/posts/PostDetails";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";
import CreateProject from "./components/posts/CreatePost";
import Organizations from "./components/layout/Organizations";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/organizations" component={Organizations} />
          <Route path="/post/:id" component={PostDetails} />
          <Route path="/signin" component={SignIn} />
          <Route path="/signup" component={SignUp} />
          <Route path="/create" component={CreateProject} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
