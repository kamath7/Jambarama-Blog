import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function BlogForm({ addPost }) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !author || !content) return;

    addPost({ title, author, content });
    setTitle("");
    setAuthor("");
    setContent("");
    navigate("/");
  };

  return (
    <div className="container mt-4">
      <h2>📝 Create a New Blog Post</h2>
      <form onSubmit={handleSubmit} className="p-4 border rounded shadow-sm bg-light">
        <input type="text" placeholder="Title" className="form-control mb-3" value={title} onChange={(e) => setTitle(e.target.value)} />
        <input type="text" placeholder="Your name" className="form-control mb-3" value={author} onChange={(e) => setAuthor(e.target.value)} />
        <textarea placeholder="Write your blog..." className="form-control mb-3" rows="5" value={content} onChange={(e) => setContent(e.target.value)} />
        <button type="submit" className="btn btn-success">✅ Publish</button>
      </form>
    </div>
  );
}

export default BlogForm;
