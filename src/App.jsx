import Layout from "./layout/Layout";

import TodoForm from "./components/todoForm/TodoForm";
import Todos from "./components/todos/Todos";
import Filters from "./components/filters/Filters";

const App = () => {
  return (
    <Layout>
      <TodoForm />
      <Filters />
      <Todos />
    </Layout>
  );
};

export default App;
