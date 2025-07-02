import { Outlet } from "react-router-dom";
import { Header } from "../Header/Header";
import "./Layout.scss";
import { FilterProvider } from "@/shared/providers/filter/FilterProvider";

export function Layout() {
  return (
    <div className="layout">
      <FilterProvider>
        <Header />
        <main>
          <Outlet />
        </main>
      </FilterProvider>
    </div>
  );
}
