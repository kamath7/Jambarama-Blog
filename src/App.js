import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BlogList from "./components/BlogList";
import BlogForm from "./components/BlogForm";
import BlogDetails from "./components/BlogDetails";
import BlogEdit from "./components/BlogEdit";

function App() {
  const [posts, setPosts] = useState([]);

  const addPost = (post) => {
    setPosts([post, ...posts]);
  };

  const updatePost = (index, newContent) => {
    const updatedPosts = [...posts];
    updatedPosts[index].content = newContent;
    setPosts(updatedPosts);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<BlogList posts={posts} />} />
        <Route path="/new" element={<BlogForm addPost={addPost} />} />
        <Route path="/post/:index" element={<BlogDetails posts={posts} />} />
        <Route path="/edit/:index" element={<BlogEdit posts={posts} updatePost={updatePost} />} />
      </Routes>
    </Router>
  );
}

export default App;
