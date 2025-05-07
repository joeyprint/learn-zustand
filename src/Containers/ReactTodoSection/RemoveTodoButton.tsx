import Button from "../../Components/Bases/Button";
import { useReactTodoList } from "../../Contexts/useReactTodoList";

const RemoveTodoButton = ({ id }: { id: number }) => {
  const { removeTodo } = useReactTodoList();

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
