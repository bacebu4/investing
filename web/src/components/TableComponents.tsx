import styled from "styled-components";
import { GRAY, LIGHT_GRAY, Color, colorSwitcher } from "../utils/colors";

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

function fontWeightSwitcher(weight: "medium" | "bold" | undefined) {
  switch (weight) {
    case "medium":
      return "500";

    case "bold":
      return "600";

    default:
      return "400";
  }
}

export const Td = styled.td<{
  textAlign?: string;
  color?: Color;
  isMedium?: boolean;
  isBold?: boolean;
  weight?: "medium" | "bold";
}>`
  padding: 12px;
  text-align: ${(props) => props.textAlign};

  color: ${(props) => colorSwitcher(props.color ?? "dark")};

  font-weight: ${(props) => fontWeightSwitcher(props.weight)};

  &:first-child {
    border-radius: 10px 0 0 10px;
  }

  &:last-child {
    border-radius: 0 10px 10px 0;
  }
`;
