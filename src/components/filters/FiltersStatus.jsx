import { Radio } from "antd";
import { useContext } from "use-context-selector";

import { statusTodos as data } from "../../config/filters";
import filtersContext from "../../context/filters/filtersContext";

const FiltersStatus = () => {
  const { statusTodos } = useContext(filtersContext);

  const onChangeHandler = (e) => statusTodos(e.target.value);

  return (
    <Radio.Group
      defaultValue="All"
      buttonStyle="solid"
      onChange={onChangeHandler}
    >
      {data.map(({ title, key }) => (
        <Radio.Button key={key} value={title}>
          {title}
        </Radio.Button>
      ))}
    </Radio.Group>
  );
};

export default FiltersStatus;
