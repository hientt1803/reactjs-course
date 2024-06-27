import { useEffect, useState } from "react";

const CountdownTimer = ({ initialCount }: { initialCount: number }) => {
  const [count, setCount] = useState(initialCount);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((prevCount) => prevCount - 1);
    }, 1000);
    
    return () => clearInterval(timer);
  }, [count]);

  return <div>Countdown: {count}</div>;
};

export default CountdownTimer;
