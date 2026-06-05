import { useEffect, useState } from "react";
import axios from "axios";

export default function TaskList() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/tasks").then(res => setTasks(res.data));
  }, []);

  return (
    <ul>
      {tasks.map(task => (
        <li key={task._id}>{task.title} - {task.status}</li>
      ))}
    </ul>
  );
}
