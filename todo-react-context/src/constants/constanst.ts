import type { State } from '../types/types';

export const BASE_URL = 'http://localhost:3000/todos';
export const INITIAL_STTATE: State = { value: [], isLoading: false, error: '' };
export const DEBOUNCE_TIMER = 700;
