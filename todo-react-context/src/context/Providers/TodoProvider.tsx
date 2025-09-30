import type { ReactNode } from 'react';
import { useRequest } from '../../hooks/useRequest';
import type { IContext } from '../../types/types';
import { TodoContext } from '../context';

export function TodoProvider({ children }: { children: ReactNode }) {
  const data = useRequest();

  const value: IContext = {
    ...data,
  };

  return <TodoContext value={value}>{children}</TodoContext>;
}
