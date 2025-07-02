import { Link } from "react-router-dom";
import { HomeIcon, PhoneIcon, StarIcon } from "@heroicons/react/24/solid";
import "./Header.scss";

interface IHeaderNavLink {
  linkTo: string;
  icon: string;
  isActive: boolean;
}

const iconsMap: Record<string, React.ElementType> = {
  home: HomeIcon,
  phone: PhoneIcon,
  star: StarIcon,
};

export function HeaderNavLink({ linkTo, icon, isActive }: IHeaderNavLink) {
  const IconComponent = iconsMap[icon];

  return (
    <Link
      to={linkTo}
      className={`header__nav-link${
        isActive ? " header__nav-link--active" : ""
      }`}
    >
      {IconComponent ? <IconComponent className="header__icon" /> : <span />}
    </Link>
  );
}
