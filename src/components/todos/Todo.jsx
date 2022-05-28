import { useState } from "react";
import { useContext } from "use-context-selector";
import { List, Switch, Badge, Row, Col, Button, Space, Modal } from "antd";
import { CheckOutlined, CloseOutlined } from "@ant-design/icons";

import todosContext from "../../context/todos/todosContext";
import TodoForm from "../todoForm/TodoForm";

const Todo = ({ todo }) => {
  const { id, name, type, isComplate } = todo;

  const [modalVisible, setModalVisible] = useState(false);
  const { deleteTodo, toggleComplateTodo } = useContext(todosContext);

  const deleteHandler = () => deleteTodo(id);

  const ComplateHandler = () => toggleComplateTodo(id);

  const showModal = () => setModalVisible(true);
  const closeModal = () => setModalVisible(false);

  return (
    <>
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
              <Button
                type="primary"
                className="todo__btn-edit"
                onClick={showModal}
              >
                Edit
              </Button>
              <Button type="primary" danger onClick={deleteHandler}>
                Delete
              </Button>
            </Space>
          </Col>
        </Row>
      </List.Item>
      <Modal
        title="Edit Todo"
        visible={modalVisible}
        footer={null}
        width="90%"
        onCancel={closeModal}
      >
        <TodoForm todo={todo} closeModal={closeModal}/>
      </Modal>
    </>
  );
};

export default Todo;
