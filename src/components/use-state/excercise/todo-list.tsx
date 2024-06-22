import { useState } from "react";

const TodoList = () => {
  const [todos, setTodos] = useState<string[]>([]);
  const [input, setInput] = useState<string>("");

  const addTodo = () => {
    setTodos([...todos, input]);
    setInput("");
  };

  const handleAddTodoByKeyboard = (
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (e.key === "Enter") addTodo();
  };

  const handleDeleteItem = (index: number) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div>
      <h1>Todo List</h1>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => handleAddTodoByKeyboard(e)}
        placeholder="Add a todo"
      />
      <button onClick={addTodo}>Add</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index} className="flex justify-start gap-10">
            <span>{todo}</span>
            <span onClick={() => handleDeleteItem(index)}>X</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
