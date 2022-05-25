import { useReducer } from "react";

import todosContext from "./todosContext";
import todosReducer from "./todosReducer";

import todos from "../../config/todos";

const TodosState = ({ children }) => {
  const initialState = {
    todos,
  };

  const [state, dispatch] = useReducer(todosReducer, initialState);

  return (
    <todosContext.Provider value={{ ...state }}>
      {children}
    </todosContext.Provider>
  );
};

export default TodosState;
