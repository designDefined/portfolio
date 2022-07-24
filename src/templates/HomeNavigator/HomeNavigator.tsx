import "./HomeNavigator.scss";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import DotNavigator from "../../components/Navigator/DotNavigator/DotNavigator";
import { dataOfHomeNavigator } from "../../data/sampleData";
import { rotateInvert, rotateNext } from "../../redux/homeCube";
import { RootState } from "../../redux/store";

function HomeNavigator() {
  const dispatch = useDispatch();
  const rotatingState = useSelector((state: RootState) => state.homeCube);
  const handleClick = (payload: string) => {
    if (!rotatingState.toNext && !rotatingState.toInvert) {
      if (["new", "contact"].includes(payload)) {
        dispatch(rotateInvert());
      } else {
        dispatch(rotateNext());
      }
    }
  };
  return (
    <article className="HomeNavigator">
      <DotNavigator boneArray={dataOfHomeNavigator} clicker={handleClick} />
    </article>
  );
}

export default HomeNavigator;
