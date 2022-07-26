import { WordBoneType } from "../../../types/BoneInterface";
import WordItem from "./WordItem";
import "./WordNavigator.scss";

interface WordNavigatorParams {
  boneArray: WordBoneType[];
  clicker: (payload: string) => void;
  currentValue: string;
}

function WordNavigator({
  boneArray,
  clicker,
  currentValue,
}: WordNavigatorParams) {
  return (
    <nav className="WordNavigator">
      <ul className="WordNavigator_List">
        {boneArray.map((bone: WordBoneType, index: number) => (
          <WordItem
            index={index}
            bone={bone}
            clicker={clicker}
            currentValue={currentValue}
          />
        ))}
      </ul>
    </nav>
  );
}

export default WordNavigator;
