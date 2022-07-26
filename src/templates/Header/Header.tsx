import { useSelector } from "react-redux";
import WordNavigator from "../../components/Navigator/WordNavigator/WordNavigator";
import { dataOfHeader } from "../../data/sampleData";
import "./Header.scss";
import { RootState } from "../../redux/store";

function Header() {
  const handleClick = () => {};
  const theme = useSelector((state: RootState) => state.theme.past);

  return (
    <header className={`Header theme-${theme}`}>
      <div className="Header_Logo">D3</div>
      <div className="Header_Navigator">
        <WordNavigator
          boneArray={dataOfHeader}
          clicker={handleClick}
          currentValue="asd"
        />
      </div>
    </header>
  );
}

export default Header;
