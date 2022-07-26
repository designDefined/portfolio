import { Link } from "react-router-dom";
import { WordBoneType } from "../../../types/BoneInterface";
import "./WordItem.scss";

interface WordItemParams {
  index: number;
  bone: WordBoneType;
  clicker: (payload: string) => void;
  currentValue: string;
}

function WordItem({ index, bone, clicker, currentValue }: WordItemParams) {
  const { type, name, clickerPayload } = bone;
  return (
    <li
      key={index}
      className={`WordItem ${
        clickerPayload === currentValue ? "selected" : "not-selected"
      }`}
    >
      {type === "link" ? (
        <Link to={clickerPayload}>{name}</Link>
      ) : (
        <button
          type="button"
          onClick={() => {
            clicker(clickerPayload);
          }}
        >
          {name}
        </button>
      )}
    </li>
  );
}

export default WordItem;
