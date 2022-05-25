import Layout from "./layout/Layout";

import TodoForm from "./components/todoForm/TodoForm";
import Todos from "./components/todos/Todos";

const App = () => {
  return (
    <Layout>
      <TodoForm />
      <Todos />
    </Layout>
  );
};

export default App;
