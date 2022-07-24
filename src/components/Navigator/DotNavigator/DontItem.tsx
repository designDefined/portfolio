import "./DotItem.scss";
import { useSelector } from "react-redux";
import { DotBoneType } from "../../../types/BoneInterface";
import { RootState } from "../../../redux/store";

interface DotItemParams {
  index: number;
  bone: DotBoneType;
  clicker: (payload: any) => void;
}

const DotItemStyle = (color: string) => ({
  borderColor: color,
});

function DotItem({ index, bone, clicker }: DotItemParams) {
  const currentTheme = useSelector((state: RootState) => state.theme.current);
  return (
    <li
      key={index}
      className={`DotItem 
      ${bone.type === "circle" && "DotItem-circle"} 
      ${bone.type === "rect" && "DotItem-rect"}`}
      style={currentTheme === "default" ? DotItemStyle(bone.defaultColor) : {}}
    >
      <button
        className="DotItem_Button"
        type="button"
        onClick={() => {
          console.log("a");
          clicker(bone.clickerPayload);
        }}
      />
      <div className="DotItem_Name">{bone.name}</div>
    </li>
  );
}
export default DotItem;
