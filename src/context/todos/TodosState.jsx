import { useReducer } from "react";

import todosContext from "./todosContext";
import todosReducer from "./todosReducer";

const TodosState = ({ children }) => {
  const initialState = {
    Todos: [],
  };

  const [state, dispatch] = useReducer(todosReducer, initialState);

  return (
    <todosContext.Provider value={{ ...state }}>{children}</todosContext.Provider>
  )
};

export default TodosState;
