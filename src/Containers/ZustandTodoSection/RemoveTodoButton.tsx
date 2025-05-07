import Button from "../../Components/Bases/Button";
import useZustandTodoList from "../../Contexts/useZustandTodoList";

const RemoveTodoButton = ({ id }: { id: number }) => {
  const { removeTodo } = useZustandTodoList();

  const handleRemoveTodo = (id: number) => {
    removeTodo(id);
  };

  return (
    <Button className={"button-danger"} onClick={() => handleRemoveTodo(id)}>
      Remove
    </Button>
  );
};

export default RemoveTodoButton;
