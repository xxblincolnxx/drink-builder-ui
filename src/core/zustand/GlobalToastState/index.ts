import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import { ToastState, Toast, ToastStore } from './types';

// --- Initial State ---
const initialState: ToastState = {
  toastQueue: [],
};

// --- Reducers ---
const handleAddToQueue = (state: ToastState, payload: Toast) => {
  state.toastQueue.push(payload);
};
const handleRemoveFromQueue = (state: ToastState, id: string) => {
  state.toastQueue = state.toastQueue.filter((toast) => toast.id !== id);
};

// --- Store ---
const useToastState = create(
  immer<ToastStore>((set) => ({
    ...initialState,
    actions: {
      addToastToQueue: (payload: Toast) => {
        set((state) => {
          handleAddToQueue(state, payload);
        });
      },
      removeToastFromQueue: (id: string) => {
        set((state) => {
          handleRemoveFromQueue(state, id);
        });
      },
    },
  }))
);

export default useToastState;
