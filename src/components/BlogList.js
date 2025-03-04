import React from "react";
import { Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";

function BlogList({ posts }) {
  return (
    <div className="container mt-4">
      <h2 className="mb-3">📌Jambarama</h2>
      <Link to="/new" className="btn btn-primary float-end"> New Post</Link>
      <div className="clearfix"></div>

      {posts.length === 0 ? (
        <p className="text-muted">No posts yet. Be the first to contribute!</p>
      ) : (
        <div className="row">
          {posts.map((post, index) => (
            <div key={index} className="col-md-6 mb-4">
              <div className="card shadow-sm">
                <div className="card-body">
                  <h4 className="card-title">{post.title}</h4>
                  <p className="text-muted">By {post.author}</p>

                  <div className="card-text">
                    <ReactMarkdown>
                      {post.content.split(" ").slice(0, 30).join(" ") + "..."}
                    </ReactMarkdown>
                  </div>

                  <Link to={`/post/${index}`} className="btn btn-sm btn-outline-primary mt-2">
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default BlogList;
