import "./Home.scss";
import Logo from "../../templates/Logo/Logo";
import HomeNavigator from "../../templates/HomeNavigator/HomeNavigator";
import HomeBillboard from "../../templates/HomeBillboard/HomeBillboard";

function Home() {
  return (
    <div className="Home">
      <Logo />
      <HomeNavigator />
      <HomeBillboard />
    </div>
  );
}

export default Home;
