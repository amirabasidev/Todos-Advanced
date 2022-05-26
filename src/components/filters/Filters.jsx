import { Form, Row, Card, Col } from "antd";

import FiltersSort from "./FiltersSort";
import FiltersTypes from "../todoForm/TodoTypes";
import FiltersSearch from "./FiltersSearch";
import FiltersStatus from "./FiltersStatus";

const Filters = () => {
  return (
    <Card>
      <Form>
        <Row justify="space-between" wrap={false}>
          <Col span={4}>
            <FiltersSort />
          </Col>
          <Col span={4}>
            <FiltersTypes filter/>
          </Col>
          <Col span={9}>
            <FiltersSearch />
          </Col>
          <Col>
            <FiltersStatus />
          </Col>
        </Row>
      </Form>
    </Card>
  );
};

export default Filters;
