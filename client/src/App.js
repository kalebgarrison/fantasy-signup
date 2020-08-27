import React, { useEffect } from "react";
import "./App.css";
import axios from "axios";
import {BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NoMatch from "./containers/NoMatch/NoMatch";
import Home from "./containers/Home/Home";
import Preview from "./containers/Preview/Preview";
import SadDay from "./containers/SadDay/SadDay";

function App() {
  useEffect(() => {
    axios
      .get("/api/config")
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
   <Router>
     <Switch>
       <Route exact path="/" component={Home} />
       <Route exact path="/preview" component={Preview} />
       <Route exact path="/sad" component={SadDay} />
       <Route component={NoMatch} />
     </Switch>
   </Router>
  );
}

export default App;

