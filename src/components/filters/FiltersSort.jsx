import { Select } from "antd";

import { sortTodos } from "../../config/filters";

const SelectInput = () => {
  const { Option } = Select;

  return (
    <Select placeholder="Sort" className="w-100">
      {sortTodos.map(({ title, key }) => (
        <Option key={key} value={title}>
          {title}
        </Option>
      ))}
    </Select>
  );
};

export default SelectInput;
