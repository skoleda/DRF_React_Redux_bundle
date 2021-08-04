import * as tyTodo from '../actions/types';

const initialState = {
  todos: [],
}

export default (state = initialState, action) => {
  switch (action.type) {

    case tyTodo.GET_TODOS:
      return {
        ...state,
        todos: action.payload,
      }
    case tyTodo.ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      }
    case tyTodo.DELETE_TODO:
      return {
        ...state,
        todos: [...state.todos.filter(todo => todo.id !== action.payload)]
      }
    case tyTodo.DELETE_TODOS:
      return {
        ...state,
        todos: []
      }
      case tyTodo.TOGGLE_TODO:
      return {
        ...state,
        todos: [...state.todos]
      }
    default:
      return state;
  }

};




