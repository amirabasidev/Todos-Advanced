import { useContext } from "use-context-selector";
import { Card, Form, Row, Button, Col, Input } from "antd";

import TodoTypes from "./TodoTypes";

import typesTodo from "../../config/typesTodo";
import todosContext from "../../context/todos/todosContext";

const TodoForm = () => {
  const [form] = Form.useForm();

  const { createTodo } = useContext(todosContext);

  const generateTodo = () => {
    const typeValue = form.getFieldValue("type");

    const id = Math.random().toString(36).substr(2, 9);
    const name = form.getFieldValue("name");
    const type = typesTodo.find((type) => type.name == typeValue);
    const isComplate = false;

    return {
      id,
      name,
      type,
      isComplate,
    };
  };

  const onFinishHandler = () => {
    const newTodo = generateTodo();

    createTodo(newTodo);

    form.resetFields();
  };

  return (
    <Card>
      <Form form={form} onFinish={onFinishHandler}>
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
