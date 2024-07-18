import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { textState } from "./stores";

const TextInput: React.FC = () => {
  const [text, setText] = useRecoilState(textState);
  const textState2 = useRecoilValue(textState);
  // const setTextState2 = useSetRecoilState(textState);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  return (
    <div>
      <input type="number" value={text} onChange={onChange} />
      <br />
      Echo: {text}
      {textState2}
      {/* <button></button> */}
    </div>
  );
};

export default TextInput;
