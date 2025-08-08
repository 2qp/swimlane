import { useCallback, useEffect, useRef } from "react";

const useDebouncedCallback = <T extends (...args: any[]) => void>(
  callback: T,
  delay: number
): T => {
  const savedCallback = useRef<T | null>(null);
  const timeoutId = useRef<NodeJS.Timeout | null>(null); // Ref to store timeout ID

  // Store the latest callback in the ref
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  const debouncedCallback = useCallback(
    (...args: any[]) => {
      if (timeoutId.current) {
        clearTimeout(timeoutId.current); // Clear previous timeout
      }

      // Set new timeout and store its ID
      timeoutId.current = setTimeout(() => {
        if (savedCallback.current) {
          savedCallback.current(...args);
        }
      }, delay);
    },
    [delay]
  );

  return debouncedCallback as T;
};

export { useDebouncedCallback };
