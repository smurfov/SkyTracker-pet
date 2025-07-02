import { useState, type ReactNode } from "react";
import { FilterContext } from "./filter.context";

export function FilterProvider({ children }: { children: ReactNode }) {
  const [filter, setSearch] = useState("");

  const setFilter = (value: string) => {
    setSearch(value);
  };

  return (
    <FilterContext.Provider value={{ filter, setFilter }}>
      {children}
    </FilterContext.Provider>
  );
}
