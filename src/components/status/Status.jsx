import { useContextSelector } from "use-context-selector";
import { Card, Progress, Typography, Space } from "antd";

import { getCompletedCount, getPercentComplated } from "../../utils/status";

import todosContext from "../../context/todos/todosContext";

const Status = () => {
  const { todos } = useContextSelector(todosContext, (state) => state);

  const { Title } = Typography;

  const ComplateTodos = getCompletedCount(todos);

  const activeTodos = todos.length - ComplateTodos;
  return (
    <Card className="w-50">
      <Space align="start" className="status__container">
        <Space direction="vertical">
          <Title level={5}>Total Todos : {todos.length}</Title>
          <Title level={5} type="success">
            Complate Todos : {ComplateTodos}
          </Title>
          <Title level={5} className="status__title-active">
            Active Todos : {activeTodos}
          </Title>
        </Space>
        <Progress
          type="circle"
          percent={getPercentComplated(ComplateTodos, todos.length)}
        />
      </Space>
    </Card>
  );
};

export default Status;
