import { Input } from "antd";
import { useContextSelector } from "use-context-selector";

import filtersContext from "../../context/filters/filtersContext";

const FiltersSearch = () => {
  const { Search } = Input;

  const setSearch = useContextSelector(
    filtersContext,
    (state) => state.setSearch,
  );

  const onSearchHandler = (value) => setSearch(value);

  return (
    <Search onSearch={onSearchHandler} placeholder="Search Todos" allowClear />
  );
};

export default FiltersSearch;
