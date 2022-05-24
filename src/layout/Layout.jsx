import TodosState from "../context/todos/TodosState";
import FiltersState from "../context/filters/FiltersState";

import Header from "../components/UI/Header";

const Layout = ({ children }) => {
  return (
    <TodosState>
      <FiltersState>
        <Header />
        <main className="container">{children}</main>
      </FiltersState>
    </TodosState>
  );
};

export default Layout;