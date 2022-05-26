import { Input } from "antd";
import { useContext } from "use-context-selector";

import filtersContext from "../../context/filters/filtersContext";

const FiltersSearch = () => {
  const { Search } = Input;

  const { searchTodos } = useContext(filtersContext);

  return (
    <Search onSearch={searchTodos} placeholder="Search Todos" allowClear />
  );
};

export default FiltersSearch;
