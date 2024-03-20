import { useEffect, useState } from "react";

function useLocalStateFunc(defaultValue, key) {
  const [value, setValue] = useState(() => {
    return localStorage.getItem(key) === null
      ? defaultValue
      : JSON.parse(localStorage.getItem(key));
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}

export { useLocalStateFunc };
