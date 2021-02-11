import styled from "styled-components";

export const Title = styled.h2<{ mt?: string; isSmall?: boolean }>`
  font-size: ${(props) => (props.isSmall ? "1.125rem" : "2rem")};
  font-weight: 600;
  margin-top: ${(props) => props.mt};
`;
