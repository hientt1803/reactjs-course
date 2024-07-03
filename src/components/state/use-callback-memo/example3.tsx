import { useCallback, useEffect, useState } from "react";

const Example3 = () => {
  const [users, setUsers] = useState([]);

  const getData = useCallback((type: string) => {
    return fetch(`https://jsonplaceholder.typicode.com/${type}`);
  }, []);

  const handleClick = () => {
    getData("users")
      .then((res) => res.json())
      .then((users) => {
        setUsers(users);
      });
  };

  return (
    <div>
      <div>Data</div>
      <button onClick={handleClick}>Get Data</button>
      <p>{JSON.stringify(users)}</p>
      <ChildComponent getData={getData} />
    </div>
  );
};

export default Example3;

const ChildComponent = ({
  getData,
}: {
  getData: (type: string) => Promise<Response>;
}) => {
  const [comments, setComments] = useState([]);
  useEffect(() => {
    console.log("Child component ");

    getData("comments")
      .then((res) => res.json())
      .then((comments) => {
        setComments(comments);
      });
  }, [getData]);

  return (
    <div>
      <h1 className="bg-red-600 w-full">Child component</h1>
      <div>{JSON.stringify(comments)}</div>
    </div>
  );
};
