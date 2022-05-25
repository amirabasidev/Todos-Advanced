import { Card, Form, Row, Button, Col, Input, Select, Badge } from "antd";

import typesTodo from "../../config/typesTodo";

const TodoForm = () => {
  const [form] = Form.useForm();

  const { Option } = Select;

  return (
    <Card>
      <Form form={form}>
        <Row wrap={false} gutter={20}>
          <Col span={16}>
            <Form.Item
              name="name"
              className="from__item"
              rules={[{ required: true, message: "Todo Name Empty!" }]}
            >
              <Input type="text" placeholder="Todo Name" />
            </Form.Item>
          </Col>
          <Col span={4}>
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
          </Col>
          <Col span={4}>
            <Button type="primary" htmlType="submit" className="w-100">
              add Todo
            </Button>
          </Col>
        </Row>
      </Form>
    </Card>
  );
};

export default TodoForm;
