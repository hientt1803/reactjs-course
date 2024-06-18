import { useEffect } from "react";

const UnMount = () => {
  useEffect(() => {
    const timer = setInterval(() => {
      console.log("Interval running...");
    }, 1000);

    return () => {
      clearInterval(timer);
      console.log("Interval cleared");
    };
  }, []);

  return (
    <div>
      <h1>Complex Unmounting Example</h1>
      <p>Component Content</p>
    </div>
  );
};

export default UnMount;
