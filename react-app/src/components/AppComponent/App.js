import './App.css';
import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from '../HomeComponent/Home';
import Posts from '../PostsComponent/Posts';
import Contact from '../ContactComponent/Contact';
import Post from '../PostComponent/Post';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>Menu with Link component</h1>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/posts">Posts</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
        <div id="no-link">
          <h1>Menu without Link component</h1>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/posts">Posts</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
        <hr />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/posts" element={<Posts />}>
            <Route path=":postId" element={<Post state={{ title: ":postId" }} />} />
          </Route>
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div >
    );
  }
}

export default App;
