import TodoList from "./TodoList";
import AddTodoFormFields from "./AddTodoFormFields";

import "./ReactTodoSectionStyles.css";

const ReactTodoSection = () => {
  return (
    <div className="flex flex-direction-column justify-content-center align-items-center">
      <div className="flex flex-direction-column justify-content-center align-items-center todoList-form">
        <AddTodoFormFields />
        <TodoList />
      </div>
    </div>
  );
};

export default ReactTodoSection;
