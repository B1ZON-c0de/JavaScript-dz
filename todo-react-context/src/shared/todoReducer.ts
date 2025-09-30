import type { Action, State } from '../types/types';

export function todoReducer(state: State, action: Action): State {
  switch (action.type) {
    case 'FETCH_START':
      return { ...state, isLoading: true, error: '' };
    case 'FETCH_SUCCESS':
      return { value: action.payload, isLoading: false, error: '' };
    case 'FETCH_ERROR':
      return { ...state, isLoading: false, error: action.payload };
    case 'SET_PENDING':
      return {
        ...state,
        value: state.value.map((todo) =>
          todo.id === action.payload.id
            ? { ...todo, pending: action.payload.pending }
            : todo
        ),
      };
    case 'ADD_SUCCESS':
      return { ...state, value: [...state.value, action.payload] };
    case 'DELETE_SUCCESS':
      return {
        ...state,
        value: state.value.filter((todo) => todo.id !== action.payload.id),
      };
    case 'COMPLETE_SUCCESS':
      return {
        ...state,
        value: state.value.map((todo) =>
          todo.id === action.payload.id
            ? { ...todo, completed: true, pending: false }
            : todo
        ),
      };
    default:
      return state;
  }
}
