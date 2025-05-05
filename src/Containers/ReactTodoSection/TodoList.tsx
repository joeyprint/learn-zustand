import { useReactTodoList } from "../../Contexts/useReactTodoList";

const TodoList = () => {
  const { todos } = useReactTodoList();

  if (todos.length === 0) {
    return <p>No task list</p>;
  }

  return (
    <div className={"w-full"}>
      {todos.map((todo) => (
        <div className="todoList-item">
          <p className="todoList-item-message" key={todo.id}>
            {todo.text}
          </p>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
