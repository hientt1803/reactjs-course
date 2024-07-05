/**
 * Mở rộng bài tập về quản lý danh sách công việc với useReducer.
 * Sử dụng useReducer để thực hiện các action như thêm, sửa, xóa công việc.
 */

import { useReducer, useState } from "react";

interface ITask {
  id: number;
  text: string;
}

interface IState {
  tasks: ITask[];
}

const initialState: IState = { tasks: [] };

type IAction =
  | {
      type: "ADD_TASK";
      payload: {
        id: number;
        text: string;
      };
    }
  | {
      type: "REMOVE_TASK";
      payload: {
        id: number;
      };
    }
  | {
      type: "EDIT_TASK";
      payload: {
        id: number;
        text: string;
      };
    };

const reducer = (state: IState, action: IAction) => {
  switch (action.type) {
    case "ADD_TASK":
      return { tasks: [...state.tasks, action.payload] };
    case "REMOVE_TASK":
      return {
        tasks: state.tasks.filter((task) => task.id !== action.payload.id),
      };
    case "EDIT_TASK":
      return {
        tasks: state.tasks.map((task) =>
          task.id === action.payload.id
            ? { ...task, text: action.payload.text }
            : task
        ),
      };
    default:
      return state;

    // lap qua mang
    /**
     * Minh check neu cai id = id minh muon cap nhat
     * => thi minh cap nhat lai ten
     */
  }
};

const TaskManager = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [task, setTask] = useState("");
  const [isEdited, setIsEdited] = useState(false);

  const addTask = () => {
    const newTask = { id: Date.now(), text: task };
    dispatch({ type: "ADD_TASK", payload: newTask });
    setTask("");
  };

  const editTask = (text: string) => {
    setTask(text);
    setIsEdited(true);
  };

  const handleSaveTask = (prevTask: ITask) => {
    const updateTask = { ...prevTask, text: task };
    dispatch({ type: "EDIT_TASK", payload: updateTask });
  };

  return (
    <div>
      <input value={task} onChange={(e) => setTask(e.target.value)} />
      <button onClick={addTask}>Add Task</button>
      <ul>
        {state.tasks.map((task) => (
          <li key={task.id}>
            {task.text}
            <button
              onClick={() =>
                isEdited ? handleSaveTask(task) : editTask(task.text)
              }
            >
              {isEdited ? "Save" : "Edit"}
            </button>
            <button
              onClick={() =>
                dispatch({ type: "REMOVE_TASK", payload: { id: task.id } })
              }
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskManager;
