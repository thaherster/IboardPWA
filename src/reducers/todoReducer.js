import { ADD_TODO, GET_TODOS, DELETE_TODO } from "../actions/types";

const initialState = {
  todos: [],
  todo: {},
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload]
      };
    case GET_TODOS:
      return {
        ...state,
        todos: action.payload
      };
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter(todo => todo._id !== action.payload)
      };
    default:
      return state;
  }
}
