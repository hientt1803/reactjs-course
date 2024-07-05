import { deletePost } from "./api/posts-api";

const DeletePostInteractiveExample = ({ postId }: { postId: number }) => {
  const handleDelete = async () => {
    await deletePost(postId);
  };

  return <button onClick={handleDelete}>Delete</button>;
};

export default DeletePostInteractiveExample;
