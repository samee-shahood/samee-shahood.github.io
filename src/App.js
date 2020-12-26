// src/App.js

import React from "react";
import * as ReactBootStrap from "react-bootstrap";
import { BrowserRouter, Route, HashRouter } from "react-router-dom";

import HomePage from "./components/HomePage.js";

import AllPosts from "./components/AllPosts.js";
import OnePost from "./components/OnePost.js";
import NavBar from "./components/NavBar.js";




function App() {
  return (
    <HashRouter>

      <div>
	  <NavBar/>
		<Route component={HomePage} path="/" exact />

        <Route exact component={AllPosts} path="/blog" render={props => <AllPosts/>} />
        <Route component={OnePost} path="/:slug" />
      </div>
    </HashRouter>
  );
}
export default App;