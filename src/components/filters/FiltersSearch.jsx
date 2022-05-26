import { Input } from "antd";

const FiltersSearch = () => {
  const { Search } = Input;

  return (
    <Search placeholder="Search Todos" allowClear />
  );
};

export default FiltersSearch;
