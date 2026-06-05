import React from "react";
import api from "../utils/api";

const TaskList = ({ tasks, fetchTasks }) => {
  const updateStatus = async (id, status) => {
    await api.put(`/tasks/${id}`, { status });
    fetchTasks();
  };

  const deleteTask = async (id) => {
    await api.delete(`/tasks/${id}`);
    fetchTasks();
  };

  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th>Title</th>
          <th>Priority</th>
          <th>Deadline</th>
          <th>Status</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {tasks.map((task) => (
          <tr key={task._id}>
            <td>{task.title}</td>
            <td>
              <span
                className={`badge ${
                  task.priority === "High"
                    ? "bg-danger"
                    : task.priority === "Medium"
                    ? "bg-warning"
                    : "bg-success"
                }`}
              >
                {task.priority}
              </span>
            </td>
            <td>{task.deadline?.slice(0, 10)}</td>
            <td>{task.status}</td>
            <td>
              <button
                className="btn btn-sm btn-success me-2"
                onClick={() => updateStatus(task._id, "Completed")}
              >
                Complete
              </button>
              <button
                className="btn btn-sm btn-danger"
                onClick={() => deleteTask(task._id)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TaskList;
