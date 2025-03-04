import React from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";

function BlogDetails({ posts }) {
  const { index } = useParams();
  const navigate = useNavigate();
  const post = posts[index];

  if (!post) return <p className="text-muted">Blog post not found.</p>;

  return (
    <div className="container mt-4">
      <h2>{post.title}</h2>
      <p className="text-muted">By {post.author}</p>
      <ReactMarkdown>{post.content}</ReactMarkdown>

      <div className="mt-3">
        <button onClick={() => navigate("/")} className="btn btn-secondary me-2">🔙 Back</button>
        <Link to={`/edit/${index}`} className="btn btn-warning">✏️ Edit</Link>
      </div>
    </div>
  );
}

export default BlogDetails;
