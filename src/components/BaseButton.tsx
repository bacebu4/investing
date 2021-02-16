import styled from "styled-components";
import { colorSwitcher, Color } from "../utils/colors";

type BaseButtonProps = {
  ml?: string;
  mt?: string;
  color?: Color;
  isSolid?: boolean;
};

function fontColorPicker(color: Color, isSolid: boolean | undefined): string {
  if (isSolid) {
    return "white";
  }

  return colorSwitcher(color);
}

export const BaseButton = styled.button<BaseButtonProps>`
  color: ${({ color = "purple", isSolid }) => fontColorPicker(color, isSolid)};
  background-color: ${({ color = "purple" }) => colorSwitcher(color)}${(props) => (props.isSolid ? "" : "1a")};
  flex: 1;
  padding: 12px 16px;
  border: 0;
  border-radius: 16px;
  font-family: inherit;
  font-weight: 600;
  margin-left: ${(props) => props.ml};
  margin-top: ${(props) => props.mt};
  cursor: pointer;
`;
