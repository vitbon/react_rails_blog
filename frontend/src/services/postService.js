import { API_URL } from "../constants";

async function fetchAllPosts() {
  const response = await fetch(API_URL);

  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return response.json();
}

async function fetchPost(id) {
  const response = await fetch(`${API_URL}/${id}`);

  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return response.json();
}

async function deletePost(id) {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  if (response.ok === 204) {
    return response.json();
  }
}

export { fetchAllPosts, fetchPost, deletePost };
