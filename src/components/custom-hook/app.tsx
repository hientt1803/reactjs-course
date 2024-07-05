import { IPosts } from "../http-request/example2";
import useFetch from "./example1";

const CustomHookEndPoint = () => {
  const { data, loading } = useFetch<IPosts[]>(
    "https://jsonplaceholder.typicode.com/posts"
  );

  if (loading) return <p>Loading...</p>;
  if (!data) return <p>No data available</p>;

  return (
    <div>
      {data.map((post) => (
        <div key={post.id} className="bg-neutral-900 text-white p-7 mb-5">
          <h3>
            {post.id} - {post.title}
          </h3>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
};

export default CustomHookEndPoint;
