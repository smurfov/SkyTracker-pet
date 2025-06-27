import { useTheme } from "../../shared/hooks/useTheme";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="fixed top-10 left-1/2 -translate-1/2 z-50">
      <button onClick={toggleTheme}>
        {theme === "dark" ? "dark" : "light"}
      </button>
    </div>
  );
}
