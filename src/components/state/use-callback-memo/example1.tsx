import React, { useCallback, useState } from "react";
import Score from "./_components/score";

const ExampleUseCallBack = () => {
  const [scoreEntered, setScoreEntered] = useState<number>(0);
  const [playerName, setPlayerName] = useState<string>("");
  const [showPlayerName, setShowPlayerName] = useState<boolean>(false);

  // const claculateScore = (): number => {
  //   return scoreEntered * 5;
  // };

  const claculateScore = useCallback(() => {
    return scoreEntered * 5;
  }, [scoreEntered]);

  return (
    <div>
      <div>
        <input
          type="number"
          value={scoreEntered}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setScoreEntered(Number(e.target.value));
          }}
          placeholder="Enter a score"
        />
        <input
          type="text"
          value={playerName}
          onChange={(e) => {
            setPlayerName(e.target.value);
          }}
          placeholder="Enter Playername"
        />
      </div>

      <Score score={claculateScore} />

      <div>
        {!showPlayerName ? (
          <button onClick={() => setShowPlayerName(!showPlayerName)}>
            Show PlayerName
          </button>
        ) : (
          <div>
            <br />
            <button onClick={() => setShowPlayerName(!showPlayerName)}>
              Hide PlayerName
            </button>
            <br />
            <br />
            <div>PlayerName: {playerName}</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ExampleUseCallBack;
