export type ThemeType = "dark" | "light";

export interface IThemeContext {
  theme: ThemeType;
  toggleTheme: () => void;
}
