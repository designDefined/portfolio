import "./DotNavigator.scss";
import { DotBoneType } from "../../../types/BoneInterface";
import DotItem from "./DotItem";

interface DotNavigatorParams {
  boneArray: DotBoneType[];
  clicker: (payload: string) => void;
  currentValue: string;
}

function DotNavigator({
  boneArray,
  clicker,
  currentValue,
}: DotNavigatorParams) {
  return (
    <nav className="DotNavigator">
      <div className="DotNavigator_Bar" />
      <ul className="DotNavigator_List">
        {boneArray.map((bone: DotBoneType, index: number) => (
          <DotItem
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

export default DotNavigator;
