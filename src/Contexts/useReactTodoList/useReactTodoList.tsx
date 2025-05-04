import { createContext, useState, useContext, ReactNode } from "react";

export type Todo = {
  id: number;
  text: string;
  completed: boolean;
};

type ReactTodoContextType = {
  todos: Todo[];
  addTodo: (text: string) => void;
  toggleTodo: (id: number) => void;
  removeTodo: (id: number) => void;
};

const ReactTodoListContext = createContext<ReactTodoContextType | undefined>(
  undefined
);

const ReactTodoListProvider = ({ children }: { children: ReactNode }) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (text: string) => {
    const newTodo: Todo = {
      id: Date.now(),
      text,
      completed: false,
    };
    setTodos((prev) => [...prev, newTodo]);
  };

  const toggleTodo = (id: number) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const removeTodo = (id: number) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  return (
    <ReactTodoListContext.Provider
      value={{ todos, addTodo, toggleTodo, removeTodo }}
    >
      {children}
    </ReactTodoListContext.Provider>
  );
};

const useReactTodoList = () => {
  const context = useContext(ReactTodoListContext);
  if (!context) {
    throw new Error("useTodoList must be used within a TodoListProvider");
  }
  return context;
};

export { useReactTodoList };
export default ReactTodoListProvider;
