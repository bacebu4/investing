import styled from "styled-components";
import { colorSwitcher, Color } from "../utils/colors";

type BaseButtonProps = {
  ml?: string;
  mt?: string;
  color?: Color;
};

export const BaseButton = styled.button<BaseButtonProps>`
  color: ${({ color = "purple" }) => colorSwitcher(color)};
  background-color: ${({ color = "purple" }) => colorSwitcher(color)}1a;
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
