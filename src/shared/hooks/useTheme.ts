import { useContext } from "react";
import { ThemeContext } from "../providers/theme/theme.context";

export function useTheme() {
  return useContext(ThemeContext);
}
