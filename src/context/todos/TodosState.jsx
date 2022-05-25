import { useReducer } from "react";

import todosContext from "./todosContext";
import todosReducer from "./todosReducer";

import todos from "../../config/todos";
import { CREATE_TODO } from "../type";

const TodosState = ({ children }) => {
  const initialState = {
    todos,
  };

  const [state, dispatch] = useReducer(todosReducer, initialState);

  const createTodo = (todo) => {
    dispatch({ type: CREATE_TODO, payload: todo });
  };

  return (
    <todosContext.Provider value={{ ...state, createTodo }}>
      {children}
    </todosContext.Provider>
  );
};

export default TodosState;
