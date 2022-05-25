import { useContext } from "use-context-selector";
import { List, Switch, Badge, Row, Col, Button, Space } from "antd";
import { CheckOutlined, CloseOutlined } from "@ant-design/icons";

import todosContext from "../../context/todos/todosContext";

const Todo = ({ todo }) => {
  const { id, name, type, isComplate } = todo;

  const { deleteTodo, toggleComplateTodo } = useContext(todosContext);

  const deleteHandler = () => {
    deleteTodo(id);
  };

  const ComplateHandler = () => {
    toggleComplateTodo(id);
  };

  return (
    <List.Item>
      <Row>
        <Col span={17}>
          <Badge color={type.color} text={name} />
        </Col>
        <Col span={7} className="todo__actions">
          <Space size={8}>
            <Switch
              checkedChildren={<CheckOutlined />}
              unCheckedChildren={<CloseOutlined />}
              checked={isComplate}
              onChange={ComplateHandler}
            />
            <Button type="primary" className="todo__btn-edit">
              Edit
            </Button>
            <Button type="primary" danger onClick={deleteHandler}>
              Delete
            </Button>
          </Space>
        </Col>
      </Row>
    </List.Item>
  );
};

export default Todo;
