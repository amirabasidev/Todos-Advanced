import { List, Switch, Badge, Row, Col, Button, Space } from "antd";
import { CheckOutlined, CloseOutlined } from "@ant-design/icons";

const Todo = ({ todo }) => {
  const { name, type, isComplate } = todo;

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
            />
            <Button type="primary" className="todo__btn-edit">
              Edit
            </Button>
            <Button type="primary" danger>
              Delete
            </Button>
          </Space>
        </Col>
      </Row>
    </List.Item>
  );
};

export default Todo;
