import "./Background.scss";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

function Background() {
  const next = useSelector((state: RootState) => state.background.next);
  const style = { backgroundColor: next.color };

  return (
    <div className="Background">
      <div className="Background_Div Background_Primary" />
      <div className="Background_Div Background_Secondary" />
      {next && (
        <div className="Background_Div Background_Next" style={style}>
          1
        </div>
      )}
    </div>
  );
}
export default Background;
