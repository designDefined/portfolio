import "./HomeNavigator.scss";
import DotNavigator from "../../components/Navigator/DotNavigator/DotNavigator";
import { dataOfHomeNavigator } from "../../data/sampleData";
import HomeCube from "../../components/HomeCube/HomeCube";

function HomeNavigator() {
  const handleClick = () => {};

  return (
    <article className="HomeNavigator">
      <DotNavigator boneArray={dataOfHomeNavigator} clicker={handleClick} />
    </article>
  );
}

export default HomeNavigator;
