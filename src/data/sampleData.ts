import { DotBoneType, WordBoneType } from "../types/BoneInterface";

export const dataOfHeader: WordBoneType[] = [
  { type: "link", name: "Home", clickerPayload: "home" },
  { type: "link", name: "New", clickerPayload: "home" },
  { type: "link", name: "Works", clickerPayload: "as" },
  { type: "link", name: "About", clickerPayload: "home" },
  { type: "link", name: "Contact", clickerPayload: "home" },
];

export const dataOfHomeNavigator: DotBoneType[] = [
  {
    type: "circle",
    name: "New",
    clickerPayload: "default",
    defaultColor: "#f39393",
    icon: "",
  },
  {
    type: "circle",
    name: "Writer",
    clickerPayload: "writer",
    defaultColor: "#ffeec3",
    icon: "",
  },
  {
    type: "circle",
    name: "Filmmaker",
    clickerPayload: "filmmaker",
    defaultColor: "#83e8c1",
    icon: "",
  },
  {
    type: "circle",
    name: "Programmer",
    clickerPayload: "programmer",
    defaultColor: "#927aff",
    icon: "",
  },
  {
    type: "circle",
    name: "Student",
    clickerPayload: "student",
    defaultColor: "#94bd90",
    icon: "",
  },
  {
    type: "circle",
    name: "Contact",
    clickerPayload: "yourFriend",
    defaultColor: "#666666",
    icon: "",
  },
];
