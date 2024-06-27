import { useEffect, useState } from "react";

const FetchData = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  
  /**
   * Giải thích function:
   * 1. Cờ isMounted:
   * Sử dụng cờ isMounted để theo dõi trạng thái gắn kết của component.
   * Điều này đảm bảo rằng bạn chỉ cập nhật state khi component vẫn còn
   * được gắn vào DOM.
   * 2. Hàm dọn dẹp trong useEffect:
   * Hàm dọn dẹp được trả về từ useEffect sẽ được gọi khi component bị hủy.
   *  Trong hàm dọn dẹp, bạn đặt cờ isMounted thành false để ngăn chặn việc
   * cập nhật state sau khi component đã bị hủy
   */
  useEffect(() => {
    let isMounted = true; // Cờ để ngăn chặn cập nhật state sau khi component đã unmounted

    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );
        const result = await response.json();
        if (isMounted) {
          setData(result);
          setLoading(false);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();

    return () => {
      isMounted = false; // Đặt cờ thành false khi component unmount
    };
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {data.map((post: { id: number; title: string }) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default FetchData;
