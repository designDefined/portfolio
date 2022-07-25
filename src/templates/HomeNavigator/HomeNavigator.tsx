import "./HomeNavigator.scss";
import { batch, useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import DotNavigator from "../../components/Navigator/DotNavigator/DotNavigator";
import { dataOfHomeNavigator } from "../../data/sampleData";
import { rotateInvert, rotateNext } from "../../redux/homeCube";
import { RootState } from "../../redux/store";
import { setTheme, ThemeType } from "../../redux/theme";
import { isInvert } from "./homeNavigatorFunctions";
import { setNextBackground } from "../../redux/background";

function HomeNavigator() {
  const dispatch = useDispatch();
  const theme = useSelector((state: RootState) => state.theme.current);
  const isChanging = useSelector((state: RootState) => state.theme.isChanging);
  const rotatingState = useSelector((state: RootState) => state.homeCube);
  const handleClick = (payload: ThemeType) => {
    if (!isChanging) {
      // change theme & background
      batch(() => {
        dispatch(setTheme(payload));
        dispatch(setNextBackground(""));
      });

      // rotate cube
      if (!rotatingState.toNext && !rotatingState.toInvert) {
        if (isInvert(theme, payload)) {
          dispatch(rotateInvert());
        } else {
          dispatch(rotateNext());
        }
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
