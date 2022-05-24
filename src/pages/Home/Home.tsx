import { Outlet } from "react-router-dom";
import "./Home.scss";

function Home() {
  return (
    <div className="Home">
      <h1>제목</h1>
      <Outlet />
    </div>
  );
}

export default Home;
