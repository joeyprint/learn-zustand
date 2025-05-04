import { TextField } from "../../Components/Bases/Inputs";
import TodoList from "./TodoList";

const ReactTodoSection = () => {
  return (
    <div className="flex flex-direction-column justify-content-start align-items-center">
      <div className="flex align-items-center">
        <TextField />
        <button>Submit</button>
      </div>
      <TodoList />
    </div>
  );
};

export default ReactTodoSection;
