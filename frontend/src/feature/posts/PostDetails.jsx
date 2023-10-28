import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import {
  deletePost as deletePostService,
  fetchPost,
} from "../../services/postService";

function PostDetails() {
  const [post, setPost] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCurrentPost = async () => {
      try {
        const json = await fetchPost(id);
        setPost(json);
      } catch (e) {
        console.error("Failed to delete", e);
      }
    };
    fetchCurrentPost();
  }, [id]);

  const deletePost = async () => {
    try {
      await deletePostService(id);
      navigate("/");
    } catch (e) {
      console.error("Failed to delete the post...", e);
    }
  };

  if (!post) return <h2>Loading...</h2>;

  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      <Link to="/">Back to Posts</Link>
      {" | "}
      <Link to={`/posts/${post.id}/edit`}>Edit Post</Link>
      {" | "}
      <button onClick={deletePost}>Delete</button>
    </div>
  );
}

export default PostDetails;
