import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { TodoProvider } from './context/Providers/TodoProvider';
import { SearchProvider } from './context/Providers/SearchProvider';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <TodoProvider>
      <SearchProvider>
        <App />
      </SearchProvider>
    </TodoProvider>
  </StrictMode>
);
