import React from "react";

import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Content from "./components/Content";
import Footer from './components/Footer';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="OuterContainer">
        <div className="Container">
          <Header />
          <Sidebar />
          <Switch>
            <Route exact path="/">
              <div className="MainContent-Container">
                <Content />
              </div>
            </Route>
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
