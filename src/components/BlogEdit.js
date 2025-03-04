import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function BlogEdit({ posts, updatePost }) {
  const { index } = useParams();
  const navigate = useNavigate();
  const post = posts[index];

  const [content, setContent] = useState(post ? post.content : "");

  if (!post) return <p className="text-muted">Blog post not found.</p>;

  const handleSave = () => {
    updatePost(index, content);
    navigate("/");
  };

  return (
    <div className="container mt-4">
      <h2>✏️ Edit Blog</h2>
      <p className="text-muted">Editing post by {post.author}</p>

      <textarea
        className="form-control mb-3"
        rows="6"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />

      <button onClick={handleSave} className="btn btn-success me-2">💾 Save</button>
      <button onClick={() => navigate("/")} className="btn btn-secondary">❌ Cancel</button>
    </div>
  );
}

export default BlogEdit;
