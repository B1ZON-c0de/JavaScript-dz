import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { type ITodo } from '../types/types.ts';
import {
    fetchTodos,
    completeTodo,
    addTodo,
    deleteTodo,
    updateTodo
} from './todoThunk.ts';

interface TodosState {
    items: ITodo[];
    filteredItems: ITodo[];
    search: string;
    isSorted: boolean;
    isLoading: boolean;
    error: string;
}

const initialState: TodosState = {
    items: [],
    filteredItems: [],
    search: '',
    isSorted: false,
    isLoading: false,
    error: '',
};

const todosSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        setSearch: (state, action: PayloadAction<string>) => {
            state.search = action.payload;
        },
        toggleSort: (state) => {
            state.isSorted = !state.isSorted;
        },
        filterTodos: (state) => {
            let filtered = [...state.items];

            if (state.search) {
                filtered = filtered.filter(todo =>
                    todo.text.toLowerCase().includes(state.search.toLowerCase())
                );
            }

            if (state.isSorted) {
                filtered.sort((a, b) => a.text.localeCompare(b.text));
            }

            state.filteredItems = filtered;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchTodos.pending, (state) => {
                state.isLoading = true;
                state.error = '';
            })
            .addCase(fetchTodos.fulfilled, (state, action) => {
                state.isLoading = false;
                state.items = action.payload;
            })
            .addCase(fetchTodos.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload as string;
            });

        builder
            .addCase(completeTodo.pending, (state, action) => {
                const id = action.meta.arg;
                state.items = state.items.map(todo =>
                    todo.id === id ? { ...todo, pending: true } : todo
                );
            })
            .addCase(completeTodo.fulfilled, (state, action) => {
                const id = action.meta.arg;
                state.items = state.items.map(todo =>
                    todo.id === id ? { ...todo, pending: false, completed: true } : todo
                );
            })
            .addCase(completeTodo.rejected, (state, action) => {
                state.error = action.payload as string;
                const id = action.meta.arg;
                state.items = state.items.map(todo =>
                    todo.id === id ? { ...todo, pending: false } : todo
                );
            });

        builder
            .addCase(addTodo.fulfilled, (state, action) => {
                state.items.push(action.payload);
            })
            .addCase(addTodo.rejected, (state, action) => {
                state.error = action.payload as string;
            });

        builder
            .addCase(deleteTodo.pending, (state, action) => {
                const id = action.meta.arg;
                state.items = state.items.map(todo =>
                    todo.id === id ? { ...todo, pending: true } : todo
                );
            })
            .addCase(deleteTodo.fulfilled, (state, action) => {
                const id = action.meta.arg;
                state.items = state.items.filter(todo => todo.id !== id);
            })
            .addCase(deleteTodo.rejected, (state, action) => {
                state.error = action.payload as string;
                const id = action.meta.arg;
                state.items = state.items.map(todo =>
                    todo.id === id ? { ...todo, pending: false } : todo
                );
            });

        builder
            .addCase(updateTodo.pending, (state, action) => {
                const { id } = action.meta.arg;
                state.items = state.items.map(todo =>
                    todo.id === id ? { ...todo, pending: true } : todo
                );
            })
            .addCase(updateTodo.fulfilled, (state, action) => {
                const { id, newText } = action.meta.arg;
                state.items = state.items.map(todo =>
                    todo.id === id ? { ...todo, pending: false, text: newText } : todo
                );
            })
            .addCase(updateTodo.rejected, (state, action) => {
                state.error = action.payload as string;
                const { id } = action.meta.arg;
                state.items = state.items.map(todo =>
                    todo.id === id ? { ...todo, pending: false } : todo
                );
            });
    },
});

export const { setSearch, toggleSort, filterTodos } = todosSlice.actions;
export default todosSlice.reducer;