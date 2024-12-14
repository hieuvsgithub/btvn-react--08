import { useEffect } from "react";
import { createContext } from "react";
import { getAll } from "../services/productService";
import { useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const TodoContext = createContext();

// eslint-disable-next-line react/prop-types
const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    (async () => {
      const datas = await getAll("/todos");
      setTodos(datas);
    })();

    return () => {};
  }, []);

  return <TodoContext.Provider value={todos}>{children}</TodoContext.Provider>;
};
export default TodoProvider;
