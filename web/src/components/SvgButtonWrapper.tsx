import styled from "styled-components";

export const SvgButtonWrapper = styled.button`
  border: none;
  background: none;
  cursor: pointer;

  &:hover {
    svg {
      transform: scale(1.1);
    }
  }
  &::-moz-focus-inner {
    border: 0;
  }
  svg {
    outline: none;
    transition: transform 0.15s linear;
  }
`;
