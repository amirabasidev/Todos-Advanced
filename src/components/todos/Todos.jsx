import { Card, List, Empty } from "antd";
import { useContext } from "use-context-selector";

import Todo from "./Todo";

import todosContext from "../../context/todos/todosContext";

const Todos = () => {
  const { todos } = useContext(todosContext);

  return (
    <Card>
      <List
        itemLayout="vertical"
        size="large"
        locale={{
          emptyText: <Empty description={<span>Todos Empty</span>} />,
        }}
        dataSource={todos}
        renderItem={(todo) => <Todo todo={todo} />}
      />
    </Card>
  );
};

export default Todos;
