import { Select, Badge, Form } from "antd";
import { useContext } from "use-context-selector";

import typesTodo from "../../config/typesTodo";
import filtersContext from "../../context/filters/filtersContext";

const TodoTypes = ({ filter }) => {
  const { typeTodos } = useContext(filtersContext);

  const { Option } = Select;

  const onChangeHandler = filter && typeTodos;

  return (
    <Form.Item
      name="type"
      className="from__item"
      rules={[{ required: true, message: "Please Select Todo Type!" }]}
    >
      <Select className="w-100" onChange={onChangeHandler} placeholder="Types">
        {typesTodo.map((type) => (
          <Option key={type.key} value={type.name}>
            <Badge color={type.color} text={type.name} />
          </Option>
        ))}
      </Select>
    </Form.Item>
  );
};

export default TodoTypes;
