import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { API_URL } from "../../constants";

export default function EditPostForm() {
  const [post, setPost] = useState([]);
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCurrentPost = async () => {
      try {
        const response = await fetch(`${API_URL}/${id}`);
        if (response.ok) {
          const json = await response.json();
          setPost(json);
        } else {
          throw response;
        }
      } catch (e) {
        console.log("An error occured...");
        setError(e);
      } finally {
        setLoading(false);
      }
    };
    fetchCurrentPost();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch(`${API_URL}/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: post.title,
        body: post.body,
      }),
    });
    if (response.ok) {
      const json = await response.json();
      console.log("Success: ", json);
      navigate(`/posts/${id}`);
    } else {
      console.log("An error occured...");
    }
  };

  if (!post) return <h2>Loading...</h2>;

  return (
    <div>
      <h2>Edit Post</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="post-title">Title: </label>
          <input
            id="post-text"
            type="text"
            required
            value={post?.title}
            onChange={(e) => setPost({ ...post, title: e.target.value })}
          />
        </div>
        <br />
        <div>
          <label htmlFor="post-body">Body: </label>
          <textarea
            id="post-body"
            required
            value={post?.body}
            onChange={(e) => setPost({ ...post, body: e.target.value })}
          />
        </div>
        <br />
        <div>
          <button type="submit" onClick={handleSubmit}>
            Save
          </button>
        </div>
      </form>
    </div>
  );
}
