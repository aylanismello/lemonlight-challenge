import React from "react";

import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";
import ScrollToTop from './ScrollToTop';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="OuterContainer">
        <div className="Container">
          <Header />
          <Switch>
            <Route exact path="/">
              <Sidebar page="home" />
              <Content page="home" pageHeader="Welcome Home!" />
            </Route>
            <Route exact path="/1">
              <Sidebar page={1} />
              <Content page={1} />
            </Route>
            <Route exact path="/2">
              <Sidebar page={2} />
              <Content page={2} />
            </Route>
            <Route exact path="/3">
              <Sidebar page={3} />
              <Content page={3} />
            </Route>
            <Route exact path="/4">
              <Sidebar page={4} />
              <Content page={4} />
            </Route>
            <Route exact path="/5">
              <Sidebar page={5} />
              <Content page={5} />
            </Route>
            <Route exact path="/6">
              <Sidebar page={6} />
              <Content page={6} />
            </Route>
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
