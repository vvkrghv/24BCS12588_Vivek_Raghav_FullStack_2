import { useEffect, useReducer, useState } from "react";
import TaskList from "../components/TaskList";

const initialTasks = [
  {
    id: 1,
    title: "Finish DBMS assignment",
    completed: false,
  },
  {
    id: 2,
    title: "Revise React hooks",
    completed: false,
  },
  {
    id: 3,
    title: "Submit lab report",
    completed: true,
  },
];

function reducer(state, action) {
  switch (action.type) {
    case "SET_TASKS":
      return action.payload;

    case "ADD_TASK":
      return [
        ...state,
        {
          id: Date.now(),
          title: action.payload,
          completed: false,
        },
      ];

    case "TOGGLE_TASK":
      return state.map((task) =>
        task.id === action.payload
          ? { ...task, completed: !task.completed }
          : task
      );

    case "DELETE_TASK":
      return state.filter(
        (task) => task.id !== action.payload
      );

    default:
      return state;
  }
}

function TaskManager() {
  const [tasks, dispatch] = useReducer(reducer, []);

  const [newTask, setNewTask] = useState("");

  useEffect(() => {
    dispatch({
      type: "SET_TASKS",
      payload: initialTasks,
    });
  }, []);

  function addTask() {
    if (newTask.trim() === "") {
      return;
    }

    dispatch({
      type: "ADD_TASK",
      payload: newTask,
    });

    setNewTask("");
  }

  return (
    <div>
      <h2>MY TASKS</h2>

      <input
        type="text"
        placeholder="New task"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />

      <button onClick={addTask}>Add Task</button>

      <TaskList
        tasks={tasks}
        dispatch={dispatch}
      />
    </div>
  );
}

export default TaskManager;