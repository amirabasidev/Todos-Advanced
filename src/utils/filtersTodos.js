const filterTodos = (Todos, { sort, search, type, status }) => {
    switch (status) {
      case 'All':
        Todos;
        break;
      case 'Active':
        Todos = Todos.filter((todo) => !todo.isComplate);
        break;
      case 'Completed':
        Todos = Todos.filter((todo) => todo.isComplate);
        break;
      default:
        `Unknown filter ${status}`;
    }
  
    switch (sort) {
      case '':
        Todos;
        break;
      case 'A-Z':
        Todos = Todos.sort((a, b) =>
          a.name > b.name ? 1 : b.name > a.name ? -1 : 0
        );
        break;
      case 'Z-A':
        Todos = Todos.sort((a, b) =>
          a.name < b.name ? 1 : b.name < a.name ? -1 : 0
        );
        break;
      default:
        `Unknown filter ${sort}`;
    }
  
    if (type != '') {
      Todos = Todos.filter((todo) => todo.type.name === type);
    }
  
    if (search !== '') {
      Todos = Todos.filter((todo) =>
        todo.name.toLowerCase().trim().includes(search.toLowerCase().trim())
      );
    }
  
    return Todos;
  };
  
  export default filterTodos;