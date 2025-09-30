import { createContext } from 'react';
import type { IContext } from '../types/types';
import type { ISearch } from '../types/types';

export const TodoContext = createContext<IContext | null>(null);
export const SearchContext = createContext<ISearch | null>(null);
