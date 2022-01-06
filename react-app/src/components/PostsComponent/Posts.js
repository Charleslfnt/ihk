import './Posts.css';
import React from "react";
import { getPosts } from "./PostsData";
import { Outlet, NavLink } from "react-router-dom";

class Posts extends React.Component {
  render() {
    return (
      <div className="Posts">
        <h2>Posts</h2>
        <ul>
          {getPosts().map((post) => (
            <li key={post.id}>Article: <NavLink to={`/posts/${post.id}`} >{post.title}</NavLink></li>
          ))}
        </ul>
        <hr />
        <Outlet />
      </div>
    );
  }
}

export default Posts;
