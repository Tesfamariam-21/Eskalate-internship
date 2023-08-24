import { Task } from "../model";
import SingelTask from "./SingleTask";
import "./Styles.css";

interface TaskListProps {
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}
const TaskList: React.FC<TaskListProps> = ({ tasks, setTasks }) => {
  return (
    <div className="Tasks">
      {tasks.map((task) => (
        <SingelTask
          key={task.id}
          task={task}
          tasks={tasks}
          setTasks={setTasks}
        />
      ))}
    </div>
  );
};
export default TaskList;
