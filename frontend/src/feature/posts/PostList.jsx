import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  fetchAllPosts,
  deletePost as deletePostService,
} from "../../services/postService";

function PostsList() {
  const [posts, setPosts] = useState([]);
  const [, setLoading] = useState(true);
  const [, setError] = useState(null);

  useEffect(() => {
    async function loadPosts() {
      try {
        const data = await fetchAllPosts();
        setPosts(data);
      } catch (e) {
        setError("An error occured...");
        setLoading(false);
      }
    }
    loadPosts();
  }, []);

  const deletePost = async (id) => {
    try {
      await deletePostService(id);
      setPosts(posts.filter((post) => post.id !== id));
    } catch (e) {
      console.error("Failed to delete the post...", e);
    }
  };

  return (
    <div>
      {posts.map((post) => (
        <div key={post.id} className="post-container">
          <h2>
            <Link to={`/posts/${post.id}`} className="post-title">
              {post.title}
            </Link>
          </h2>
          <div className="post-links">
            <Link to={`/posts/${post.id}/edit`}>Edit Post</Link>
            {" | "}
            <button onClick={() => deletePost(post.id)}>Delete</button>
          </div>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default PostsList;
