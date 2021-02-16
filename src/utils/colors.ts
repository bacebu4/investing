export const PURPLE = "#6A63DD";
export const YELLOW = "#F6DE82";
export const BLUE = "#88CAFF";
export const DARK_BLUE = "#619AFB";
export const ROSE = "#FC8C9A";
export const GRAY = "#A4A2C1";
export const LIGHT_GRAY = "#F7F6FF";
export const GREEN = "#56C13B";
export const RED = "#D68927";
export const VIVID_RED = "#D63227";
export const DARK = "#383838";

const colors = {
  purple: PURPLE,
  yellow: YELLOW,
  blue: BLUE,
  "dark blue": DARK_BLUE,
  rose: ROSE,
  gray: GRAY,
  "light gray": LIGHT_GRAY,
  green: GREEN,
  red: RED,
  dark: DARK,
  success: GREEN,
  warning: RED,
  danger: VIVID_RED,
  "vivid red": VIVID_RED,
};

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
  | "dark"
  | "success"
  | "warning"
  | "danger";

export function colorSwitcher(color: Color): string {
  return colors[color];
}
