import { useReducer } from "react";

import filtersContext from "./filtersContext";
import filtersReducer from "./filtersReducer";

import { SORT_TODOS,TYPE_TODOS } from "../type";

const FiltersState = ({ children }) => {
  const initialState = {
    search: "",
    sort: "",
    type: "",
    status: "All",
  };

  const [state, dispatch] = useReducer(filtersReducer, initialState);

  const sortTodos = (value) => {
    dispatch({ type: SORT_TODOS, payload: value });
  };

  const typeTodos = (value) => {
    dispatch({ type: TYPE_TODOS, payload: value });
  };

  return (
    <filtersContext.Provider value={{ ...state, sortTodos,typeTodos }}>
      {children}
    </filtersContext.Provider>
  );
};

export default FiltersState;
