import { useState } from "react";
import Button from "../../Components/Bases/Button";
import { TextField } from "../../Components/Bases/Inputs";
import useZustandTodoList from "../../Contexts/useZustandTodoList";

const AddTodoFormFields = () => {
  const { addTodo } = useZustandTodoList();

  const [newTodo, setNewTodo] = useState<string>("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setNewTodo(value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    addTodo(newTodo);
    setNewTodo("");
  };

  return (
    <form onSubmit={handleSubmit} noValidate className={"w-full"}>
      <div className="flex align-items-center">
        <TextField
          value={newTodo}
          defaultValue={newTodo}
          onChange={handleChange}
          className={"w-full"}
        />
        <Button className="ml-2 button-primary" type="submit">
          Submit
        </Button>
      </div>
    </form>
  );
};

export default AddTodoFormFields;
