import Layout from "./layout/Layout";

import TodoForm from "./components/todoForm/TodoForm";
import Todos from "./components/todos/Todos";
import Filters from "./components/filters/Filters";
import Status from "./components/status/Status";

const App = () => {
  return (
    <Layout>
      <TodoForm />
      <Filters />
      <Todos />
      <Status />
    </Layout>
  );
};

export default App;
