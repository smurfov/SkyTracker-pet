import { Link } from "react-router-dom";
import { cn } from "../../utils/cn";

interface IHeaderElement {
  linkTo: string;
  icon: string;
  isActive: boolean;
}

export function HeaderElement({ linkTo, icon, isActive }: IHeaderElement) {
  return (
    <Link
      to={linkTo}
      className={cn(
        "flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 dark:bg-neutral-800 text-yellow-500 dark:text-yellow-300 focus:outline-none transition-all duration-300 hover:scale-105"
      )}
    >
      <i className={`fas ${icon}`}></i>
    </Link>
  );
}
