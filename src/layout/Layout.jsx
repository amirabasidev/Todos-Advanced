import TodosState from "../context/todos/TodosState";
import FiltersState from "../context/filters/FiltersState";

const Layout = ({ children }) => {
  return (
    <TodosState>
      <FiltersState>
        <main className="container">{children}</main>
      </FiltersState>
    </TodosState>
  );
};

export default Layout;