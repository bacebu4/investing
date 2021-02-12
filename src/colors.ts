export const PURPLE = "#6A63DD";
export const YELLOW = "#F6DE82";
export const BLUE = "#88CAFF";
export const DARK_BLUE = "#619AFB";
export const ROSE = "#FC8C9A";
export const GRAY = "#A4A2C1";
export const LIGHT_GRAY = "#F7F6FF";
export const GREEN = "#56C13B";
export const RED = "#D68927";
export const DARK = "#383838";

export type Color =
  | "purple"
  | "yellow"
  | "green"
  | "blue"
  | "dark blue"
  | "rose"
  | "gray"
  | "light gray"
  | "red"
  | "dark";

export function colorSwitcher(color: Color) {
  switch (color) {
    case "blue":
      return BLUE;

    case "purple":
      return PURPLE;

    case "yellow":
      return YELLOW;

    case "green":
      return GREEN;

    case "dark blue":
      return DARK_BLUE;

    case "rose":
      return ROSE;

    case "gray":
      return GRAY;

    case "light gray":
      return LIGHT_GRAY;

    case "red":
      return RED;

    case "dark":
      return DARK;

    default:
      break;
  }
}
