import { Outlet } from "react-router-dom";
import { ThemeToggle } from "../Theme/ThemeToggle";

export function Layout() {
  return (
    <div>
      <main>
        <ThemeToggle />
        <Outlet />
      </main>
    </div>
  );
}
