"use client";

import { useEffect, useState } from "react";

export function useLocalStorage<T>(key: string, initialValue: T) {
  const [value, setValue] = useState<T>(initialValue);
  const [loaded, setLoaded] = useState(false);

  // Load once on mount
  useEffect(() => {
    try {
      const raw = localStorage.getItem(key);
      if (raw !== null) {
        setValue(JSON.parse(raw));
      } else {
        localStorage.setItem(key, JSON.stringify(initialValue));
      }
    } catch (e) {
      console.error("useLocalStorage load error", e);
    } finally {
      setLoaded(true);
    }
  }, [key]);

  // Save only after "loaded" is true
  useEffect(() => {
    if (!loaded) return;
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
      console.error("useLocalStorage save error", e);
    }
  }, [key, value, loaded]);

  return [value, setValue, loaded] as const;
}
