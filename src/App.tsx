import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ROUTES } from "./routes";
import { Home } from "./pages/Home";
import { Layout } from "./components/layout/Layout";
import { Contacts } from "./pages/Contacts";
import { Favorite } from "./pages/Favorite";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.home.path} element={<Layout />}>
          <Route index element={<Home />} />
          <Route path={ROUTES.contacts.path} element={<Contacts />} />
          <Route path={ROUTES.favorite.path} element={<Favorite />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
