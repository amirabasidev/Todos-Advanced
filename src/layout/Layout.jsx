import { Space } from "antd";
import TodosState from "../context/todos/TodosState";
import FiltersState from "../context/filters/FiltersState";

import Header from "../components/UI/Header";

const Layout = ({ children }) => {
  return (
    <TodosState>
      <FiltersState>
        <Header />
        <main className="container">
          <Space
            direction="vertical"
            size={20}
            className="d-flex"
          >
            {children}
          </Space>
        </main>
      </FiltersState>
    </TodosState>
  );
};

export default Layout;
