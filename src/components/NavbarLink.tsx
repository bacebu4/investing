import React from "react";
import styled from "styled-components";
import { DARK, GRAY } from "../colors";

export const NavbarLinkInner = styled.a<{ isActive?: boolean; ml?: string }>`
  font-size: 1.125rem;
  font-weight: 600;
  color: ${(props) => (props.isActive ? undefined : GRAY)};
  margin-left: ${(props) => props.ml};
  cursor: pointer;
  :hover {
    color: ${DARK};
  }
`;

export const NavbarLink: React.FC<{
  children: React.ReactNode;
  ml?: string;
  isActive?: boolean;
}> = ({ children, ml, isActive }) => {
  return (
    <li>
      <NavbarLinkInner ml={ml} isActive={isActive}>
        {children}
      </NavbarLinkInner>
    </li>
  );
};
