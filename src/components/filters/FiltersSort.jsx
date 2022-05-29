import { Select } from "antd";
import { useContextSelector } from "use-context-selector";

import { sortTodos as data } from "../../config/filters";
import filtersContext from "../../context/filters/filtersContext";

const SelectInput = () => {
  const { Option } = Select;

  const setSort = useContextSelector(filtersContext, (state) => state.setSort);

  const onChangeHandler = (value) => setSort(value);
  
  return (
    <Select onChange={onChangeHandler} placeholder="Sort" className="w-100">
      {data.map(({ title, key }) => (
        <Option key={key} value={title}>
          {title}
        </Option>
      ))}
    </Select>
  );
};

export default SelectInput;
