import { useState } from "react";
import "./App.css";

export default function App() {
  const [input, setInput] = useState("");
  const [tasks, setTasks] = useState([]);
  const [error, setError] = useState("");

  function handleChange(e) {
    const value = e.target.value;
    setInput(value);

    if (value.trim() === "") {
      setError("Task cannot be empty");
    } else if (value.length < 3) {
      setError("Task must be at least 3 characters long");
    } else {
      setError("");
    }
  }

  function addTask() {
    setTasks([...tasks, input.trim()]);
    setInput("");
    setError("");
  }

  function deleteTask(index) {
    setTasks(tasks.filter((_, i) => i !== index));
  }
  const isInvalid = input.trim() === "" || input.trim().length < 3;

  return (
    <div>
      <h2>tasks {tasks.length}</h2>
      <input placeholder="Enter task.." value={input} onChange={handleChange} />
      <button onClick={addTask} disabled={isInvalid}>
        {" "}
        Add Task
      </button>
      {error && <p className="error">{error}</p>}

      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task}
            <button onClick={() => deleteTask(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
