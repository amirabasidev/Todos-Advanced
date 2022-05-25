import { CREATE_TODO } from "../type";

const todosReducer = (state, action) => {
  switch (action.type) {
    case CREATE_TODO:
      return { ...state, todos: [...state.todos, action.payload] };
    default:
      return state;
  }
};

export default todosReducer;
