import styled from "styled-components";
import { GRAY, LIGHT_GRAY } from "../colors";

export const Table = styled.table<{ mt?: string }>`
  text-align: left;
  min-width: 100%;

  margin-top: ${(props) => props.mt};
`;

export const Th = styled.th`
  padding: 12px;
  font-size: 1.125rem;
  color: ${GRAY};
  font-weight: 700;
`;

export const Tr = styled.tr`
  &:nth-child(even) {
    background-color: ${LIGHT_GRAY};
  }
`;

export const Td = styled.td`
  padding: 12px;

  &:first-child {
    border-radius: 10px 0 0 10px;
  }

  &:last-child {
    border-radius: 0 10px 10px 0;
  }
`;
