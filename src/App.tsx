import "./css-reset.css";
import "./App.scss";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import List from "./pages/Home/List";
import Item from "./pages/Home/Item";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="list" element={<List />}>
            <Route path=":postId" element={<Item />} />
          </Route>
          <Route
            path="*"
            element={<div style={{ fontSize: "2rem" }}>page not found</div>}
          />
        </Route>
      </Routes>
    </div>
  );
}
export default App;
