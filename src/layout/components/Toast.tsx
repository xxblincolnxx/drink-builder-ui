import React, { useEffect, useMemo, useState } from 'react';
import useToastState from '../../core/zustand/GlobalToastState';
import {
  TOAST_DURATION,
  TOAST_FADE_DURATION,
} from '../../core/utilities/constants';

const Toast: React.FC = () => {
  // --- Global State ---
  const toastQueue = useToastState((state) => state.toastQueue);
  const removeToastFromQueue = useToastState(
    (state) => state.actions.removeToastFromQueue
  );

  // --- Local State ---
  const [visible, setVisible] = useState(false);

  // --- Derived State ---
  const currentToast = toastQueue[0] ?? null;

  // Handle show/hide animation trigger
  useEffect(() => {
    if (currentToast) {
      setVisible(true);

      const hideDelay = setTimeout(() => {
        setVisible(false);

        // Fade out before hiding it in global state
        const cleanupDelay = setTimeout(() => {
          removeToastFromQueue(currentToast.id);
        }, TOAST_FADE_DURATION); // match CSS fade duration

        return () => clearTimeout(cleanupDelay);
      }, TOAST_DURATION);
      return () => clearTimeout(hideDelay);
    }
  }, [currentToast, removeToastFromQueue]);

  const toastClass = useMemo(() => {
    return [
      'toast',
      currentToast?.toastType === 'warn' && 'toast-warn',
      currentToast?.toastType === 'error' && 'toast-error',
      currentToast?.toastType === 'success' && 'toast-success',
      visible ? '' : 'toast-fade',
    ]
      .filter(Boolean)
      .join(' ');
  }, [currentToast, visible]);

  if (!currentToast) return null;

  return <div className={toastClass}>{currentToast.message}</div>;
};

export default Toast;
