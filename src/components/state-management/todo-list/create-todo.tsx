import React, { useState } from "react";
import { useSetRecoilState } from "recoil";
import { todoListState } from "./store";

export function TodoItemCreator() {
  const [inputValue, setInputValue] = useState("");
  const setTodoList = useSetRecoilState(todoListState);

  const generateUniqueId = () => {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
  };

  const addItem = () => {
    if (inputValue == "") {
      alert("Please provide input");
      return;
    }

    const uniqueId = generateUniqueId();

    setTodoList((oldTodoList) => [
      ...oldTodoList,
      {
        id: uniqueId,
        text: inputValue,
        isComplete: false,
      },
    ]);
    setInputValue("");
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const onKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      addItem();
    }
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={onChange}
        onKeyPress={onKeyPress}
      />
      <button onClick={addItem}>Add</button>
    </div>
  );
}
