import React, { useEffect, useRef, useState } from "react";
import { Task } from "../model";
import { AiFillDelete, AiTwotoneEdit } from "react-icons/ai";
import { MdDoneOutline } from "react-icons/md";
import "./Styles.css";

type TaskProps = {
  task: Task;
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
};

const SingleTask: React.FC<TaskProps> = ({ task, tasks, setTasks }) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [editTask, setEditTask] = useState<string>(task.task);

  const handleDone = (id: number) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, isDone: !task.isDone } : task
      )
    );
  };

  const handleDelete = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const handleEdit = (e: React.FormEvent, id: number) => {
    e.preventDefault();
    setTasks(
      tasks.map((task) => (task.id === id ? { ...task, task: editTask } : task))
    );
    setEdit(false);
  };

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, [edit]);

  return (
    <form
      action=""
      className="task-single"
      onSubmit={(e) => handleEdit(e, task.id)}
    >
      {edit ? (
        <input
          ref={inputRef}
          value={editTask}
          onChange={(e) => setEditTask(e.target.value)}
          className="task-single--text"
        />
      ) : task.isDone ? (
        <s className="task-single--text">{task.task}</s>
      ) : (
        <span className="task-single--text">{task.task}</span>
      )}

      <div>
        <span
          className="icon"
          onClick={() => {
            if (!edit && !task.isDone) {
              setEdit(!edit);
            }
          }}
        >
          <AiTwotoneEdit />
        </span>
        <span className="icon" onClick={() => handleDelete(task.id)}>
          <AiFillDelete />
        </span>
        <span className="icon" onClick={() => handleDone(task.id)}>
          <MdDoneOutline />
        </span>
      </div>
    </form>
  );
};

export default SingleTask;
