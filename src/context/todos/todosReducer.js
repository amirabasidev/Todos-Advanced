import { CREATE_TODO, DELETE_TODO } from "../type";

const todosReducer = (state, action) => {
  switch (action.type) {
    case CREATE_TODO:
      return { ...state, todos: [...state.todos, action.payload] };
    case DELETE_TODO:
      const newTodos = state.todos.filter((todo) => todo.id !== action.payload);
      return { ...state, todos: newTodos };
    default:
      return state;
  }
};

export default todosReducer;
