import { ThemeType } from "../../redux/theme";

export const isInvert = (current: ThemeType, next: ThemeType) => {
  const frontThemes = ["new", "writer", "filmmaker"];
  const backThemes = ["programmer", "student", "yourFriend"];
  if (frontThemes.includes(current)) {
    if (backThemes.includes(next)) {
      return true;
    }
    return false;
  }
  if (frontThemes.includes(next)) {
    return true;
  }
  return false;
};
