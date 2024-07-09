import useSWR from "swr";
import { API_URL, fetcher } from "./api/posts-api";
import { IPosts } from "./example2";
import { Suspense } from "react";

const ConnectToDummyAPI = () => {
  const { data, error,isLoading } = useSWR<IPosts[]>(`${API_URL}/posts`, fetcher);
  // const [postsData, setpostsData] = useState([]);

  // fetch(API_URL)
  //   .then((res) => {
  //     const res_data = res.json();
  //     setpostsData(res_data);
  //   })
  //   .catch((error) => alert(error))
  //   .finally(() => console.log("finally"));

  if (error) return <div>Lỗi tải dữ liệu.</div>;
  if (!data) return <div>Đang tải...</div>;

  return (
    <div>
      {data.map((post) => (
        <div key={post.id} className="bg-neutral-900 text-white p-7 mb-5">
          <h3>
            <Suspense fallback={"Loading..."}>
              {post.id} - {post.title}
            </Suspense>
          </h3>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
};

export default ConnectToDummyAPI;
