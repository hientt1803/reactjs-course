// src/components/CreatePost.js
import { useState } from "react";
import { createPost } from "./api/posts-api";

const CreatePostInteractiveWithHTTP = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    const newPost = { title, body };
    await createPost(newPost);
    setTitle("");
    setBody("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
      />
      <textarea
        value={body}
        onChange={(e) => setBody(e.target.value)}
        placeholder="Body"
      ></textarea>
      <button type="submit">Create Post</button>
    </form>
  );
};

export default CreatePostInteractiveWithHTTP;
