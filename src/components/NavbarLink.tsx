import styled from "styled-components";
import { GRAY } from "../colors";

export const NavbarLink = styled.a<{ isActive?: boolean; ml?: string }>`
  font-size: 1.125rem;
  font-weight: 600;
  color: ${(props) => (props.isActive ? undefined : GRAY)};
  margin-left: ${(props) => props.ml};
`;
