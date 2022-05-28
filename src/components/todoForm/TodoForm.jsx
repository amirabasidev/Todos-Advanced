import { useEffect } from "react";
import { useContext } from "use-context-selector";
import { Card, Form, Row, Button, Col, Input } from "antd";

import TodoTypes from "./TodoTypes";

import typesTodo from "../../config/typesTodo";
import todosContext from "../../context/todos/todosContext";

const TodoForm = ({ todo, closeModal }) => {
  const [form] = Form.useForm();

  const { createTodo, editTodo } = useContext(todosContext);

  const generateTodo = () => {
    const typeValue = form.getFieldValue("type");

    const id = todo ? todo.id : Math.random().toString(36).substr(2, 9);
    const name = form.getFieldValue("name");
    const type = typesTodo.find((type) => type.name == typeValue);
    const isComplate = todo ? todo.isComplate : false;

    return {
      id,
      name,
      type,
      isComplate,
    };
  };

  const onFinishHandler = () => {
    const newTodo = generateTodo();

    if (!todo) {
      createTodo(newTodo);
    } else {
      editTodo(newTodo);
      closeModal();
    }

    form.resetFields();
  };

  useEffect(() => {
    if (todo) {
      form.setFieldsValue({
        name: todo.name,
        type: todo.type.name,
      });
    }
  }, [todo]);

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
              {!todo ? "Add Todo" : "Edit Todo"}
            </Button>
          </Col>
        </Row>
      </Form>
    </Card>
  );
};

export default TodoForm;
