import { Link } from "react-router-dom";
import "./Header.scss";

interface IHeaderNavLink {
  linkTo: string;
  icon: string;
  isActive: boolean;
}

export function HeaderNavLink({ linkTo, icon, isActive }: IHeaderNavLink) {
  return (
    <Link
      to={linkTo}
      className={`header__nav-link ${isActive && "header__nav-link--active"}`}
    >
      <i className={`fas ${icon}`}></i>
    </Link>
  );
}
