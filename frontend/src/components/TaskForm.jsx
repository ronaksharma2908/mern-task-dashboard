import React, { useState } from "react";
import api from "../utils/api";

const TaskForm = ({ fetchTasks }) => {
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState("Low");
  const [deadline, setDeadline] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await api.post("/tasks", { title, priority, deadline, status: "Pending" });
    setTitle("");
    setPriority("Low");
    setDeadline("");
    fetchTasks();
  };

  return (
    <form onSubmit={handleSubmit} className="mb-3">
      <input
        type="text"
        placeholder="Task Title"
        className="form-control mb-2"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <select
        className="form-control mb-2"
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
      >
        <option>Low</option>
        <option>Medium</option>
        <option>High</option>
      </select>
      <input
        type="date"
        className="form-control mb-2"
        value={deadline}
        onChange={(e) => setDeadline(e.target.value)}
      />
      <button type="submit" className="btn btn-primary w-100">
        Add Task
      </button>
    </form>
  );
};

export default TaskForm;
