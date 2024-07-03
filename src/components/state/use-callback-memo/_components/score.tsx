import { useEffect, useState } from "react";

const Score = ({ score }: { score: () => number }) => {
  const [showScore, setShowScore] = useState<number>();

  useEffect(() => {
    setShowScore(score());
    console.log("Component updating");
  }, [score]);

  return (
    <div>
      <div>Score here: {showScore}</div>
    </div>
  );
};

export default Score;
