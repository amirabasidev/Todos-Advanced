import { Form, Row, Card, Col } from "antd";

import FiltersSort from "./FiltersSort";
import FiltersTypes from "../todoForm/TodoTypes";

const Filters = () => {
  return (
    <Card>
      <Form>
        <Row justify="center" wrap={false} gutter={20}>
          <Col span={4}>
            <FiltersSort />
          </Col>
          <Col span={4}>
            <FiltersTypes />
          </Col>
        </Row>
      </Form>
    </Card>
  );
};

export default Filters;
