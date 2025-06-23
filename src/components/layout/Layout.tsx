import { Outlet } from "react-router-dom";
import { Footer } from "./footer";
import { Header } from "./header";

export function Layout() {
  return (
    <div style={{ maxWidth: "960px", margin: "0 auto", padding: "1rem" }}>
      {/* Шапка */}
      <Header />

      {/* Контент страницы */}
      <main>
        <Outlet />
      </main>

      {/* Подвал */}
      <Footer />
    </div>
  );
}
