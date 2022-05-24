import { useReducer } from "react";

import filtersContext from "./filtersContext";
import filtersReducer from "./filtersReducer";

const FiltersState = ({ children }) => {
  const initialState = {
    search: "",
    sort: "",
    type: "",
    status: "All",
  };

  const [state, dispatch] = useReducer(filtersReducer, initialState);

  return (
    <filtersContext.Provider value={{ ...state }}>
      {children}
    </filtersContext.Provider>
  );
};

export default FiltersState;
