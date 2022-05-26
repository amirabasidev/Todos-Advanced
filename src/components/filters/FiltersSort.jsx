import { Select } from "antd";
import { useContext } from "use-context-selector";

import { sortTodos as data } from "../../config/filters";
import filtersContext from "../../context/filters/filtersContext";

const SelectInput = () => {
  const { Option } = Select;

  const { sortTodos } = useContext(filtersContext);

  return (
    <Select onChange={sortTodos} placeholder="Sort" className="w-100">
      {data.map(({ title, key }) => (
        <Option key={key} value={title}>
          {title}
        </Option>
      ))}
    </Select>
  );
};

export default SelectInput;
