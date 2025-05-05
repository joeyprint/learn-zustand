import { useState } from "react";
import Button from "../../Components/Bases/Button";
import { TextField } from "../../Components/Bases/Inputs";
import { useReactTodoList } from "../../Contexts/useReactTodoList";

const AddTodoFormFields = () => {
  const { addTodo } = useReactTodoList();

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
    <div className="flex align-items-center">
      <form onSubmit={handleSubmit} noValidate>
        <TextField
          value={newTodo}
          defaultValue={newTodo}
          onChange={handleChange}
        />
        <Button className="ml-2" type="submit">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default AddTodoFormFields;
