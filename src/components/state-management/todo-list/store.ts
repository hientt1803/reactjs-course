import { atom, selector } from "recoil";

export interface IToDo {
  id: string;
  text: string;
  isComplete: boolean;
}

export const todoListState = atom<IToDo[]>({
  key: "TodoList",
  default: [],
});

// SELECTED
/* The code snippet `export const todoListFilterState = atom({ key: "TodoListFilter", default: "Show
All" });` is creating a Recoil atom called `todoListFilterState`. */
export const todoListFilterState = atom({
  key: "TodoListFilter",
  default: "Show All",
});

/* This code snippet defines a selector called `filteredTodoListState` using Recoil. The selector is
responsible for filtering the todo list based on the current filter state. Here's a breakdown of
what the code is doing: */
export const filteredTodoListState = selector<IToDo[]>({
  key: "FilteredTodoList",
  get: ({ get }) => {
    const filter = get(todoListFilterState);
    const list = get(todoListState);

    switch (filter) {
      case "completed":
        return list.filter((item) => item.isComplete);
      case "uncompleted":
        return list.filter((item) => !item.isComplete);
      default:
        return list;
    }
  },
});

/* This code snippet defines a selector called `todoListStatsState` using Recoil. The purpose of this
selector is to calculate and provide statistics about the todo list. Here's a breakdown of what the
code is doing: */
export const todoListStatsState = selector({
  key: "TodoListStats",
  get: ({ get }) => {
    const todoList = get(todoListState);

    const totalNum = todoList.length;
    const totalCompletedNum = todoList.filter((item) => item.isComplete).length;
    const totalUncompletedNum = totalNum - totalCompletedNum;
    const percentCompleted =
      totalNum === 0 ? 0 : (totalCompletedNum / totalNum) * 100;

    return {
      totalNum,
      totalCompletedNum,
      totalUncompletedNum,
      percentCompleted,
    };
  },
});
