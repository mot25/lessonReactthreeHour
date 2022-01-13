import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";

import About from "./pages/About";
import Posts from "./pages/Posts";
import PostOne from "./pages/PostOne";

function App() {
  return (
    <div>
      <Link className="navbarLinks" to="/">
        Home
      </Link>
      <Link className="navbarLinks" to="/post">
        Post
      </Link>
      <Link className="navbarLinks" to="/about">
        about
      </Link>
      <Routes>
        <Route exact path="/post" element={<Posts />} />
        <Route exact path="/post/:id" element={<PostOne />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<About />} />
      </Routes>
    </div>
  );
}
export default App;
