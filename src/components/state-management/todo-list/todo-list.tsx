import { useRecoilValue } from "recoil";
import { TodoItemCreator } from "./create-todo";
import { filteredTodoListState, IToDo } from "./store";
import { TodoListFilters } from "./todo-filter";
import { TodoItem } from "./todo-item";
import { TodoListStats } from "./todo-stats";

export function TodoList() {
  const todoList = useRecoilValue(filteredTodoListState);

  return (
    <>
      <TodoListStats />
      <TodoListFilters />
      <TodoItemCreator />

      {todoList?.map((todoItem: IToDo) => (
        <TodoItem key={todoItem.id} item={todoItem} />
      ))}
    </>
  );
}
