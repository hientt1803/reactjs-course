import { useEffect, useState } from "react";

export function SecondExample() {
  const [count, setCount] = useState<number>(0);
  const [clicks, setClicks] = useState<number>(0);
  const [result, setResult] = useState<string>("");

  useEffect(() => {
    setResult(
      `Count was updated: count is ${count} and you've clicked the console.log button ${clicks} time(s)`
    );
  }, [count, clicks]);

  return (
    <div>
      {count}
      <button onClick={() => setCount((currentCount) => currentCount - 1)}>
        -
      </button>
      <button onClick={() => setCount((currentCount) => currentCount + 1)}>
        +
      </button>

      <button onClick={() => setClicks((currentClicks) => currentClicks + 1)}>
        {result}
      </button>
    </div>
  );
}
