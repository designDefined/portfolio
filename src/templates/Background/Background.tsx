import "./Background.scss";
import { batch, useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { refreshTheme } from "../../redux/theme";
import { clearNextBackground } from "../../redux/background";

function Background() {
  const dispatch = useDispatch();
  const next = useSelector((state: RootState) => state.background.next);
  const currentTheme = useSelector((state: RootState) => state.theme.current);
  const pastTheme = useSelector((state: RootState) => state.theme.past);

  return (
    <div className={`Background theme-${pastTheme}`}>
      <div className="Background_Div Background_Primary" />
      <div className="Background_Div Background_Secondary" />
      {next.isExist && (
        <div
          className={`Background_Div Background_Next theme-${currentTheme}`}
          onAnimationStart={() => {
            setTimeout(() => {
              dispatch(refreshTheme());
            }, 3000);
          }}
          onAnimationEnd={() => {
            batch(() => {
              dispatch(clearNextBackground());
            });
          }}
        >
          1
        </div>
      )}
    </div>
  );
}
export default Background;
