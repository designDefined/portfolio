import "./DotItem.scss";
import { useSelector } from "react-redux";
import { DotBoneType } from "../../../types/BoneInterface";
import { RootState } from "../../../redux/store";

interface DotItemParams {
  index: number;
  bone: DotBoneType;
  clicker: (payload: any) => void;
  currentValue: string;
}

const DotItemStyle = (color: string) => ({
  borderColor: color,
});

function DotItem({ index, bone, clicker, currentValue }: DotItemParams) {
  const { type, icon, name, clickerPayload, defaultColor } = bone;
  return (
    <li
      key={index}
      className={`DotItem 
      ${type === "circle" && "DotItem-circle"} 
      ${type === "rect" && "DotItem-rect"}
      ${clickerPayload === currentValue ? "selected" : "notSelected"}
      `}
      style={currentValue === "default" ? DotItemStyle(defaultColor) : {}}
    >
      <button
        className="DotItem_Button"
        type="button"
        onClick={() => {
          clicker(clickerPayload);
        }}
      />
      <div className="DotItem_Name">{name}</div>
    </li>
  );
}
export default DotItem;
