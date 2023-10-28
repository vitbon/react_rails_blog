import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { API_URL } from "../../constants";

function NewPostForm() {
  const [title, setTitle] = useState([]);
  const [body, setBody] = useState([]);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, body }),
    });
    if (response.ok) {
      const { id } = await response.json();
      navigate(`/posts/${id}`);
    } else {
      console.log("An error occured...");
    }
  };

  return (
    <div>
      <h2>Create a New Post</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="titleInput">Title: </label>
          <input
            id="titleInput"
            type="text"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <br />
        <div>
          <label htmlFor="bodyInput">Body: </label>
          <textarea
            id="bodyInput"
            required
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />
        </div>
        <br />
        <div>
          <button type="submit">Create Post</button>
        </div>
      </form>
    </div>
  );
}

export default NewPostForm;
