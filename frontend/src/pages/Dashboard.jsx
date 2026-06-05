import TaskList from "../components/TaskList";
import TaskForm from "../components/TaskForm";

export default function Dashboard() {
  return (
    <div>
      <h1>Task Management Dashboard</h1>
      <TaskForm />
      <TaskList />
    </div>
  );
}
