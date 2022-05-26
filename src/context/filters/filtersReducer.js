import { SORT_TODOS, TYPE_TODOS, SEARCH_TODOS } from "../type";

const filtersReducer = (state, action) => {
  switch (action.type) {
    case SORT_TODOS:
      return { ...state, sort: action.payload };
    case TYPE_TODOS:
      return { ...state, type: action.payload };
    case SEARCH_TODOS:
      return { ...state, search: action.payload };
    default:
      return state;
  }
};

export default filtersReducer;
