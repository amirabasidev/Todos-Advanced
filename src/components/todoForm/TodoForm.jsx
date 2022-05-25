import { Card, Form, Row, Button, Col, Input } from "antd";

import TodoTypes from "./TodoTypes";

const TodoForm = () => {
  const [form] = Form.useForm();

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
            <TodoTypes />
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
