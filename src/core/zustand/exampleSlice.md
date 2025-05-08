```ts
import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

interface Todo {
  id: string;
  title: string;
  done: boolean;
}
type Actions = {
  toggleTodo: (todoId: string) => void;
};

type State = {
  todos: Record<string, Todo>;
  actions: Actions;
};

const initialState = {
  '82471c5f-4207-4b1d-abcb-b98547e01a3e': {
    id: '82471c5f-4207-4b1d-abcb-b98547e01a3e',
    title: 'Learn Zustand',
    done: false,
  },
  '354ee16c-bfdd-44d3-afa9-e93679bda367': {
    id: '354ee16c-bfdd-44d3-afa9-e93679bda367',
    title: 'Learn Jotai',
    done: false,
  },
  '771c85c5-46ea-4a11-8fed-36cc2c7be344': {
    id: '771c85c5-46ea-4a11-8fed-36cc2c7be344',
    title: 'Learn Valtio',
    done: false,
  },
  '363a4bac-083f-47f7-a0a2-aeeee153a99c': {
    id: '363a4bac-083f-47f7-a0a2-aeeee153a99c',
    title: 'Learn Signals',
    done: false,
  },
};

// Define Actions:
const toggleTodo = (todoId: string) =>
  set((state) => {
    state.todos[todoId].done = !state.todos[todoId].done;
  });

// Create Store
const useTodoStore = create<State & Actions>()(
  immer((set) => ({
    todos: initialState,
    actions: { todoToggle },
  }))
);

// Export your selectors:
export const useTodos = () => useTodoStore((state) => state.todos);
export const useTodo = (id: string) =>
  useTodoStore((state) => state.todos.find((todo) => todo.id === id));
export const useTodoActions = () => useTodoStore((state) => state.actions);
```
