import { useReactTodoList } from "../../Contexts/useReactTodoList";

const TodoList = () => {
  const { todos } = useReactTodoList();

  if (todos.length === 0) {
    return <p>No task list</p>;
  }

  return (
    <>
      {todos.map((todo) => (
        <p key={todo.id}>{todo.text}</p>
      ))}
    </>
  );
};

export default TodoList;
