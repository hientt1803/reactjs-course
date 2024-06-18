import { useEffect, useState } from "react";

interface IPost {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const MountingComponent = () => {
  const [data, setData] = useState<IPost[]>([]);

  useEffect(() => {
    console.log("Component mounted");
    fetchData();
    return () => {
      console.log("Component unmounted");
    };
  }, []);

  const fetchData = async () => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
    const jsonData = await response.json();
    setData(jsonData);
  };

  return (
    <div>
      <h1>Complex Mounting Example</h1>
      {data ? (
        <ul>
          {data.map((item: IPost) => (
            <li key={item.id}>
              {item.id} - {item.title}
            </li>
          ))}
        </ul>
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
};

export default MountingComponent;
