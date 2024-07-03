/**
 * Tạo một ứng dụng todo list với các chức năng thêm, sửa, xóa công việc.
 * Sử dụng useCallback để tối ưu hóa việc truyền hàm callback xóa công việc.
 * Sử dụng React.memo để tối ưu hóa render của mỗi công việc trong danh sách.
 * Sử dụng useMemo để tính toán số lượng công việc đã hoàn thành.
 */

import React, { useState, useCallback, useMemo } from "react";

interface ITodo {
  id: number;
  text: string;
  completed: boolean;
}

interface ITodoDetail {
  todo: ITodo;
  onRemove: (id: number) => void;
  onToggle: (id: number) => void;
}

// Component Danh sách Todo
export const TodoList = () => {
  const [todos, setTodos] = useState<ITodo[]>([
    { id: 1, text: "Learn React", completed: false },
    { id: 2, text: "Learn useCallback", completed: false },
  ]);

  return (
    <div>
      <h1>Todo List</h1>
      <input
        type="text"
        
      />
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          
        />
      ))}
      <h2>Completed: {completedCount}</h2>
    </div>
  );
};

// Component Todo
const Todo = React.memo(({ todo, onRemove, onToggle }: ITodoDetail) => {
  console.log(`Rendering todo: ${todo.text}`);
  return (
    <div>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
      />
      <span
        style={{ textDecoration: todo.completed ? "line-through" : "none" }}
      >
        {todo.text}
      </span>
      <button onClick={() => onRemove(todo.id)}>Remove</button>
    </div>
  );
});
