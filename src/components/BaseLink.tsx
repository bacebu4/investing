import styled from "styled-components";
import { DARK_BLUE } from "../utils/colors";

type BaseLinkProps = {
  mt?: string;
};

export const BaseLink = styled.a<BaseLinkProps>`
  display: inline-block;
  color: ${DARK_BLUE};
  font-weight: 500;
  cursor: pointer;
  margin-top: ${(props) => props.mt};

  &:hover {
    color: ${DARK_BLUE};
    text-decoration: underline;
  }
`;
