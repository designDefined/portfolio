import { Outlet } from "react-router-dom";
import "./Home.scss";
import Logo from "../../templates/Logo/Logo";
import HomeNavigator from "../../templates/HomeNavigator/HomeNavigator";
import HomeCube from "../../components/HomeCube/HomeCube";

function Home() {
  return (
    <div className="Home">
      <Logo />
      <HomeNavigator />
      <HomeCube />
      <Outlet />
    </div>
  );
}

export default Home;
