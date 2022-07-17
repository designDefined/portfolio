import "./DotNavigator.scss";
import { DotBoneType } from "../../../types/BoneInterface";
import DotItem from "./DontItem";

interface DotNavigatorParams {
  boneArray: DotBoneType[];
  clicker: (payload: any) => void;
}

function DotNavigator({ boneArray, clicker }: DotNavigatorParams) {
  return (
    <nav className="DotNavigator">
      <div className="DotNavigator_Bar" />
      <ul className="DotNavigator_List">
        {boneArray.map((bone: DotBoneType, index: number) => (
          <DotItem index={index} bone={bone} clicker={clicker} />
        ))}
      </ul>
    </nav>
  );
}

export default DotNavigator;
