import { useState } from "react";

import filtersContext from "./filtersContext";

const FiltersState = ({ children }) => {
  const [search, setSearch] = useState("");
  const [type, setType] = useState("");
  const [sort, setSort] = useState("");
  const [status, setStatus] = useState("All");

  return (
    <filtersContext.Provider
      value={{
        filters: { search, type, sort, status },
        setSearch,
        setType,
        setSort,
        setStatus,
      }}
    >
      {children}
    </filtersContext.Provider>
  );
};

export default FiltersState;
