import { SORT_TODOS, TYPE_TODOS, SEARCH_TODOS, STATUS_TODO } from "../type";

const filtersReducer = (state, action) => {
  switch (action.type) {
    case SORT_TODOS:
      return { ...state, sort: action.payload };
    case TYPE_TODOS:
      return { ...state, type: action.payload };
    case SEARCH_TODOS:
      return { ...state, search: action.payload };
    case STATUS_TODO:
      return { ...state, status: action.payload };
    default:
      return state;
  }
};

export default filtersReducer;
