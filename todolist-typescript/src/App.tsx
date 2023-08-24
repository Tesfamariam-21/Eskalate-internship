import React, { useState } from "react";
import "./App.css";
import InputField from "./components/InputField";
import { Task } from "./model";
import TaskList from "./components/TaskList";

const App: React.FC = () => {
  const [task, setTask] = useState<string>("");
  const [tasks, setTasks] = useState<Task[]>([]);

  const handleAddTask = (e: React.FormEvent) => {
    e.preventDefault();
    if (task) {
      setTasks([...tasks, { id: Date.now(), task, isDone: false }]);
      setTask("");
    }
  };

  return (
    <div className="App">
      <span className="heading">Manage Task</span>
      <InputField task={task} setTask={setTask} handleAddTask={handleAddTask} />
      <TaskList tasks={tasks} setTasks={setTasks} />
    </div>
  );
};

export default App;
