import { use } from 'react';
import { SearchContext } from '../../context/context';

export function useSearch() {
  const context = use(SearchContext);

  if (!context)
    throw new Error(
      'useSearch должен использоваться внутри дочерних компонентов SearchProvider'
    );
  return context;
}
