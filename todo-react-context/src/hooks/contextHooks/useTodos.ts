import { use } from 'react';
import { TodoContext } from '../../context/context';

export function useTodos() {
  const context = use(TodoContext);
  if (!context)
    throw new Error(
      'useTodos должен использоваться внутри дочерних компонентов TodoProvider'
    );
  return context;
}
