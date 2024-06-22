import { useState } from "react";

const TodoList = () => {
  const [todos, setTodos] = useState<string[]>([]);
  const [input, setInput] = useState<string>("");

  const addTodo = () => {
    setTodos([...todos, input]);
    setInput("");
  };

  // Tạo hàm xóa item ra khỏi list
  // Xóa 1 item ra khỏi listTodo
  // splice

  return (
    <div>
      <h1>Todo List</h1>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            addTodo();
          }
        }}
        placeholder="Add a todo"
      />
      <button onClick={addTodo}>Add</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index} className="flex justify-start gap-10">
            <span>{todo}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
