import "./css-reset.css";
import { Outlet, Route, Routes } from "react-router-dom";
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
          <Route path="home" element={<Home />} />
          <Route path="new" element={<div>new</div>} />
          <Route path="about" element={<div>about</div>} />
          <Route path="contact" element={<div>contact</div>} />
          <Route path="as" element={<Outlet />}>
            <Route index element={<div>as (navigator here)</div>} />
            <Route path="writer" element={<div>writer</div>} />
            <Route path="filmmaker" element={<div>filmmaker</div>} />
            <Route path="programmer" element={<div>programmer</div>} />
            <Route path="student" element={<div>student</div>} />
          </Route>
          <Route path="*" element={<Page404 />} />
        </Route>
      </Routes>
    </main>
  );
}
export default App;
