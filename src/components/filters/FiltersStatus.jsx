import { Radio } from "antd";

import { statusTodos } from "../../config/filters";

const FiltersStatus = () => {
  return (
    <Radio.Group defaultValue="All" buttonStyle="solid">
      {statusTodos.map(({ title, key }) => (
        <Radio.Button key={key} value={title}>
          {title}
        </Radio.Button>
      ))}
    </Radio.Group>
  );
};

export default FiltersStatus;
