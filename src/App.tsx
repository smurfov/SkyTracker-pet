import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ROUTES } from "./routes";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Layout } from "./components/layout/Layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.home.path} element={<Layout />}>
          <Route index element={<Home />} />
          <Route path={ROUTES.about.path} element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
