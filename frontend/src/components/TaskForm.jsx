import { useState } from "react";
import axios from "axios";

export default function TaskForm() {
  const [title, setTitle] = useState("");

  const addTask = async () => {
    await axios.post("http://localhost:5000/api/tasks", { title });
    window.location.reload();
  };

  return (
    <div>
      <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Task title" />
      <button onClick={addTask}>Add Task</button>
    </div>
  );
}
