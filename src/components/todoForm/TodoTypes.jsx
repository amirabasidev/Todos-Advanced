import { Select, Badge, Form } from "antd";

import typesTodo from "../../config/typesTodo";

const TodoTypes = () => {
  const { Option } = Select;

  return (
    <Form.Item
      name="type"
      className="from__item"
      rules={[{ required: true, message: "Please Select Todo Type!" }]}
    >
      <Select className="w-100" placeholder="Types">
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
