export type Toast = {
  id: string;
  toastType: 'warn' | 'error' | 'success' | 'info' | null;
  message: string | null;
};

export type ToastState = {
  toastQueue: Toast[];
};

export type ToastActions = {
  actions: {
    addToastToQueue: (payload: Toast) => void;
    removeToastFromQueue: (id: string) => void;
  };
};

export type ToastStore = ToastState & ToastActions;
