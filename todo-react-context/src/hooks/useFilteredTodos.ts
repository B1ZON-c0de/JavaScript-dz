import { useMemo } from 'react';
import type { ITodo } from '../types/types';

export function useFilteredTodos(sortValues: ITodo[], debouncedValue: string) {
  return useMemo(() => {
    if (!debouncedValue) return sortValues;
    return sortValues.filter((todo: ITodo) =>
      todo.text.toLowerCase().includes(debouncedValue.toLowerCase())
    );
  }, [sortValues, debouncedValue]);
}
