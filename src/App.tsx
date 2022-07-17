import "./css-reset.css";
import { Route, Routes } from "react-router-dom";
import "./App.scss";
import "./styles/themes.scss";
import { useSelector } from "react-redux";
import Home from "./pages/Home/Home";
import Page404 from "./pages/Error/Page404";
import Default from "./pages/Default/Default";
import { RootState } from "./redux/store";

function App() {
  const currentTheme = useSelector((state: RootState) => state.theme.current);

  return (
    <main className={`main-container theme-${currentTheme}`}>
      <Routes>
        <Route path="/" element={<Default />}>
          <Route index element={<Home />} />
          <Route path="*" element={<Page404 />} />
        </Route>
      </Routes>
    </main>
  );
}
export default App;
