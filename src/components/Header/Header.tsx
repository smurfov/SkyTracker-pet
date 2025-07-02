import { Link, useLocation } from "react-router-dom";
import { ThemeToggle } from "@/components/Theme/ThemeToggle";
import { ROUTES } from "@/routes";
import { HeaderNavLink } from "./Header.element";
import { headerNavData } from "@/data/header-nav.data";
import "./Header.scss";
import { Filters } from "../Filters/Filters";

export function Header() {
  const { pathname } = useLocation();

  return (
    <header className="header">
      <nav className="header__nav">
        <ul className="header__list">
          {headerNavData.map((item) => (
            <li key={item.path}>
              <HeaderNavLink
                linkTo={item.path}
                icon={item.icon}
                isActive={item.path === pathname}
              />
            </li>
          ))}
        </ul>
      </nav>
      <Link to={ROUTES.home.path} className="header__logo">
        Sky<span className="header__logo-accent">Tracker</span>
      </Link>
      <div className="header__controls">
        <Filters />
        <ThemeToggle />
      </div>
    </header>
  );
}
