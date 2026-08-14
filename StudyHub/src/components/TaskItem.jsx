function TaskItem({ task, dispatch }) {
  function toggleTask() {
    dispatch({
      type: "TOGGLE_TASK",
      payload: task.id,
    });
  }

  function deleteTask() {
    dispatch({
      type: "DELETE_TASK",
      payload: task.id,
    });
  }

  return (
    <div>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={toggleTask}
      />

      <span>
        {task.title}
      </span>

      <button onClick={deleteTask}>
        Delete
      </button>
    </div>
  );
}

export default TaskItem;