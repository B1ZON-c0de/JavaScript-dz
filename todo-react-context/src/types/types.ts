import type { Dispatch, SetStateAction } from 'react';

export interface ITodo {
  id: string;
  text: string;
  completed: boolean;
  pending?: boolean;
}

export interface ISearch {
  search: string;
  setSearch: Dispatch<SetStateAction<string>>;
  isSorted: boolean;
  setIsSorted: Dispatch<SetStateAction<boolean>>;
  filteredTodos: ITodo[];
}

export type Action =
  | { type: 'FETCH_START' }
  | { type: 'FETCH_SUCCESS'; payload: ITodo[] }
  | { type: 'FETCH_ERROR'; payload: string }
  | { type: 'SET_PENDING'; payload: { id: string; pending: boolean } }
  | { type: 'ADD_SUCCESS'; payload: ITodo }
  | { type: 'DELETE_SUCCESS'; payload: { id: string } }
  | { type: 'COMPLETE_SUCCESS'; payload: { id: string } };

export interface State {
  value: ITodo[];
  isLoading: boolean;
  error: string;
}

export interface IContext extends State {
  fetchTodos: () => Promise<void>;
  addTodo: (text: string) => Promise<void>;
  deleteTodo: (id: string) => Promise<void>;
  completeTodo: (id: string) => Promise<void>;
}
