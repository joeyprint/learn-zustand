import useZustandTodoList from "../../Contexts/useZustandTodoList";
import RemoveTodoButton from "./RemoveTodoButton";

const TodoList = () => {
  const { todos } = useZustandTodoList();

  if (todos.length === 0) {
    return <p>No task list</p>;
  }

  return (
    <div className={"w-full"}>
      {todos.map((todo) => (
        <div
          className="todoList-item flex justify-content-between align-items-center"
          key={todo.id}
        >
          <p className="todoList-item-message" key={todo.id}>
            {todo.text}
          </p>
          <RemoveTodoButton id={todo.id} />
        </div>
      ))}
    </div>
  );
};

export default TodoList;
