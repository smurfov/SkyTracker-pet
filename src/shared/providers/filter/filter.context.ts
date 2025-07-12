import type { IFilter } from "@/shared/types/filter.types";
import { createContext } from "react";

export const FilterContext = createContext<IFilter>({} as IFilter);
