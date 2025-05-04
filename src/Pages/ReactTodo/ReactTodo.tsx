import ReactTodoList from "../../Containers/ReactTodoSection";
import ReactTodoListProvider from "../../Contexts/useReactTodoList";

const ReactTodo = () => {
  return (
    <ReactTodoListProvider>
      <ReactTodoList />
    </ReactTodoListProvider>
  );
};

export default ReactTodo;
