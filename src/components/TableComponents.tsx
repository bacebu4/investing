import styled from "styled-components";
import { GRAY, LIGHT_GRAY, Color, colorSwitcher } from "../colors";

export const Table = styled.table<{ mt?: string; mb?: string }>`
  text-align: left;
  min-width: 100%;

  margin-top: ${(props) => props.mt};
  margin-bottom: ${(props) => props.mb};
`;

export const Th = styled.th`
  padding: 12px;
  font-size: 1.125rem;
  color: ${GRAY};
  font-weight: 600;
`;

export const Tr = styled.tr`
  &:nth-child(even) {
    background-color: ${LIGHT_GRAY};
  }
`;

export const Td = styled.td<{
  textAlign?: string;
  color?: Color;
  isMedium?: boolean;
  isBold?: boolean;
}>`
  padding: 12px;
  text-align: ${(props) => props.textAlign};

  color: ${(props) => colorSwitcher(props.color)};

  font-weight: ${(props) =>
    props.isMedium ? "500" : props.isBold ? "700" : "400"};

  &:first-child {
    border-radius: 10px 0 0 10px;
  }

  &:last-child {
    border-radius: 0 10px 10px 0;
  }
`;
