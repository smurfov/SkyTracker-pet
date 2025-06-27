import { useTheme } from "../../shared/hooks/useTheme";
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="fixed top-10 left-1/2 -translate-1/2 z-50">
      <button
        onClick={toggleTheme}
        className="p-3 rounded-full bg-gray-200 dark:bg-neutral-800 text-yellow-500 dark:text-yellow-300 focus:outline-none transition-colors duration-300"
        aria-label="Toggle theme"
      >
        <motion.div
          key={theme}
          initial={{ rotate: 0, scale: 0.8, opacity: 0 }}
          animate={{ rotate: theme === "dark" ? 90 : 0, scale: 1, opacity: 1 }}
          exit={{ rotate: theme === "dark" ? 0 : -90, scale: 0.8, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="w-6 h-6 flex items-center justify-center"
        >
          {theme === "dark" ? <SunIcon /> : <MoonIcon />}
        </motion.div>
      </button>
    </div>
  );
}
