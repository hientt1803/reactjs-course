
import useSWR from "swr";
import { IPosts } from "./example2";
import { API_URL, fetcher } from "./api/posts-api";

const ConnectToDummyAPI = () => {
  const { data, error } = useSWR<IPosts[]>(`${API_URL}/posts`, fetcher);

  if (error) return <div>Lỗi tải dữ liệu.</div>;
  if (!data) return <div>Đang tải...</div>;

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

export default ConnectToDummyAPI;
