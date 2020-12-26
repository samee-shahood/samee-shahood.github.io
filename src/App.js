// src/App.js

import React from "react";
import * as ReactBootStrap from "react-bootstrap";
import { BrowserRouter, Route } from "react-router-dom";

import HomePage from "./components/HomePage.js";

import AllPosts from "./components/AllPosts.js";
import OnePost from "./components/OnePost.js";
import NavBar from "./components/NavBar.js";




function App() {
  return (
    <BrowserRouter>

      <div>
	  <NavBar/>
		<Route component={HomePage} path="/" exact />

        <Route component={AllPosts} path="/blog" exact />
        <Route component={OnePost} path="/:slug" />
      </div>
    </BrowserRouter>
  );
}
export default App;