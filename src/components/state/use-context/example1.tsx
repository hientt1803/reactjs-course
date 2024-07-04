import { createContext, useContext } from "react";

export const MyContext = createContext<string | null>(null);

const MyComponent = () => {
  const value = useContext(MyContext);
  return <div>{value}</div>;
};

const ExampleContext1 = () => {
  return (
    <MyContext.Provider value="Hello, World!">
      <MyComponent />
    </MyContext.Provider>
  );
};

export default ExampleContext1;
