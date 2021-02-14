import styled from "styled-components";
import { PURPLE } from "../utils/colors";

type BaseButtonProps = {
  ml?: string;
};

export const BaseButton = styled.button<BaseButtonProps>`
  color: ${PURPLE};
  background-color: ${PURPLE}1a;
  flex: 1;
  padding: 12px 16px;
  border: 0;
  border-radius: 16px;
  font-family: inherit;
  font-weight: 600;
  margin-left: ${(props) => props.ml};
  cursor: pointer;
`;
