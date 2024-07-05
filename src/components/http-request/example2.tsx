import axios from "axios";
import { useEffect, useState } from "react";
import { API_URL } from "./api/posts-api";

export interface IPosts {
  id: number;
  title: string;
  body: string;
}

const FetchDataWithUseEffect = () => {
  const [posts, setPosts] = useState<IPosts[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get(`${API_URL}/posts`)
        .then((res) => {
          setLoading(true);
          const response = res.data;
          setPosts(response);
        })
        .finally(() => setLoading(false));
    };

    fetchData();
  }, []);

  return (
    <div>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <>
          {posts.map((post) => (
            <div key={post.id} className="bg-neutral-900 text-white p-7 mb-5">
              <h3>
                {post.id} - {post.title}
              </h3>
              <p>{post.body}</p>
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default FetchDataWithUseEffect;
