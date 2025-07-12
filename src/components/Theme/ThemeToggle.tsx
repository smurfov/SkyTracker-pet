import { useTheme } from "@/shared/hooks/useTheme";
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import "./ThemeToggle.scss";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="theme-toggle"
      aria-label="Toggle theme"
    >
      <motion.div
        key={theme}
        initial={{ rotate: 0, scale: 0.8, opacity: 0 }}
        animate={{ rotate: theme === "dark" ? 90 : 0, scale: 1, opacity: 1 }}
        exit={{ rotate: theme === "dark" ? 0 : -90, scale: 0.8, opacity: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="theme-toggle__icon"
      >
        {theme === "dark" ? <SunIcon /> : <MoonIcon />}
      </motion.div>
    </button>
  );
}
