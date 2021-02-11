import styled from "styled-components";

export const Title = styled.h2<{ mt?: string }>`
  font-size: 2rem;
  font-weight: 600;
  margin-top: ${(props) => props.mt};
`;
