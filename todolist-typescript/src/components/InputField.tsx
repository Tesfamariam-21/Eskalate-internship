import { useRef } from "react";
import "./Styles.css";

interface InputFieldProps {
  task: string;
  setTask: React.Dispatch<React.SetStateAction<string>>;
  handleAddTask: (e: React.FormEvent) => void;
}
const InputField: React.FC<InputFieldProps> = ({
  task,
  setTask,
  handleAddTask,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <form
      className="input"
      onSubmit={(e) => {
        handleAddTask(e);
        inputRef.current?.blur();
      }}
    >
      <input
        ref={inputRef}
        type="input"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Add Task"
        className="input-box"
      />
      <button type="submit" className="input-button">
        Add
      </button>
      *
    </form>
  );
};
export default InputField;
