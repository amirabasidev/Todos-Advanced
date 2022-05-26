import { Card, List, Empty } from "antd";
import { useContext } from "use-context-selector";

import Todo from "./Todo";

import todosContext from "../../context/todos/todosContext";
import filtersContext from "../../context/filters/filtersContext";
import filtersTodos from "../../utils/filtersTodos";

const Todos = () => {
  const { todos } = useContext(todosContext);
  const filters = useContext(filtersContext);

  const todosToShow = filtersTodos(todos, filters);

  return (
    <Card>
      <List
        itemLayout="vertical"
        size="large"
        locale={{
          emptyText: <Empty description={<span>Todos Empty</span>} />,
        }}
        dataSource={todosToShow}
        renderItem={(todo) => <Todo todo={todo} />}
      />
    </Card>
  );
};

export default Todos;
