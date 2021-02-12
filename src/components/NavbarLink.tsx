import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { DARK, GRAY } from "../colors";

export const NavbarLinkInner = styled.span<{ isActive?: boolean; ml?: string }>`
  font-size: 1.125rem;
  font-weight: 500;
  color: ${(props) => (props.isActive ? undefined : GRAY)};
  margin-left: ${(props) => props.ml};
  cursor: pointer;
  text-decoration: none;
  :hover {
    color: ${DARK};
  }
`;

export const NavbarLink: React.FC<{
  children: React.ReactNode;
  ml?: string;
  isActive?: boolean;
  to: string;
}> = ({ children, ml, isActive, to }) => {
  return (
    <li>
      <Link to={to}>
        <NavbarLinkInner ml={ml} isActive={isActive}>
          {children}
        </NavbarLinkInner>
      </Link>
    </li>
  );
};
