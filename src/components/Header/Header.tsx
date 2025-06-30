import { Link, useLocation } from "react-router-dom";
import { ThemeToggle } from "../Theme/ThemeToggle";
import { ROUTES } from "../../routes";
import { HeaderElement } from "./Header.element";
import { headerNavData } from "../../data/header-nav.data";

export function Header() {
  const { pathname } = useLocation();

  return (
    <header className="w-full flex h-12 items-center justify-evenly z-50 bg-[#fefefe] dark:bg-[#1c1c1c]">
      <nav>
        <ul className="flex items-center gap-2">
          {headerNavData.map((item) => (
            <li key={item.path}>
              <HeaderElement
                linkTo={item.path}
                icon={item.icon}
                isActive={item.path === pathname}
              />
            </li>
          ))}
        </ul>
      </nav>
      <Link
        to={ROUTES.home.path}
        className="font-black text-xl dark:text-[#fefefe] text-neutral-800 hover:scale-110 transition-transform duration-200"
      >
        Sky<span className="text-orange">Tracker</span>
      </Link>
      <div className="flex items-center gap-2">
        <ThemeToggle />
      </div>
    </header>
  );
}
