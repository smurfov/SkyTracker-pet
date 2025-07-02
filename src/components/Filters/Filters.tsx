import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import "./Filters.scss";
import { useState } from "react";
import { useFilteredFlights } from "@/shared/hooks/useFilteredFlights";

export function Filters() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { setFilter } = useFilteredFlights();

  const toggleFilter = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="filters">
      <button onClick={toggleFilter} className="filters__icon">
        <MagnifyingGlassIcon />
      </button>
      <div className={`filters__input ${isOpen ? "active" : ""}`}>
        <input
          type="text"
          name="filter"
          onChange={(e) => {
            setFilter(e.target.value);
          }}
          placeholder="Country/city..."
        />
      </div>
    </div>
  );
}
