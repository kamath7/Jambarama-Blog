import React, { useState } from "react";
import BlogList from "./components/BlogList";
import BlogForm from "./components/BlogForm";

function App() {
  const [posts, setPosts] = useState([]);

  const addPost = (post) => {
    setPosts([post, ...posts]);
  };

  return (
    <div>
      <h1>Jambarama</h1>
      <BlogForm addPost={addPost} />
      <BlogList posts={posts} />
    </div>
  );
}

export default App;
