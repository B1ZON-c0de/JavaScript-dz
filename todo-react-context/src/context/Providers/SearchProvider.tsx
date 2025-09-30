import { useMemo, useState, type ReactNode } from 'react';
import { SearchContext } from '../context';
import { useTodos } from '../../hooks/contextHooks/useTodos';
import { useDebounce } from '../../hooks/useDebounce';
import { DEBOUNCE_TIMER } from '../../constants/constanst';
import { useFilteredTodos } from '../../hooks/useFilteredTodos';

export function SearchProvider({ children }: { children: ReactNode }) {
  const [search, setSearch] = useState('');
  const [isSorted, setIsSorted] = useState(false);

  const { value } = useTodos();

  const debouncedValue = useDebounce(search, DEBOUNCE_TIMER);

  const sortedTodos = useMemo(() => {
    const arr = [...value];
    if (isSorted) arr.sort((a, b) => a.text.localeCompare(b.text));
    return arr;
  }, [value, isSorted]);

  const filteredTodos = useFilteredTodos(sortedTodos, debouncedValue);

  return (
    <SearchContext
      value={{ search, setSearch, isSorted, setIsSorted, filteredTodos }}
    >
      {children}
    </SearchContext>
  );
}
