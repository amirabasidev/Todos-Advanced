import { SORT_TODOS } from "../type";

const filtersReducer = (state, action) => {
  switch (action.type) {
    case SORT_TODOS:
      return { ...state, sort: action.payload };
    default:
      return state;
  }
};

export default filtersReducer;
