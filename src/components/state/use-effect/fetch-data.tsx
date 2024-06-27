import { useEffect, useState } from "react";

export const DataFetcher = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((error) => console.log(error))
      .finally(() => {});
      
    return () => {
      setData([]);
    };
  }, []);

  return (
    <div>
      {data ? (
        <ul>
          {data?.map((item: { id: number; title: string }) => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ul>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};
