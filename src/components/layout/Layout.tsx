import { Outlet } from "react-router-dom";
import { Header } from "../Header/Header";
import "./Layout.scss";

export function Layout() {
  return (
    <div className="layout">
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
}
