import React from "react";
import ReactMarkdown from "react-markdown";

function BlogList({ posts }) {
  return (
    <div>
      {posts.map((post, index) => (
        <div key={index}>
          <h3>{post.title}</h3>
          <p>By {post.author}</p>
          <ReactMarkdown>{post.content}</ReactMarkdown>
        </div>
      ))}
    </div>
  );
}

export default BlogList;
