export interface DotBoneType {
  type: "circle" | "rect";
  name: string;
  icon: string;
  clickerPayload?: string;
  defaultColor: string;
}

export interface WordBoneType {
  type: "link" | "button";
  name: string;
  clickerPayload?: string;
}
