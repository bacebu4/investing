import styled from "styled-components";
import { GRAY } from "../colors";

export const ExplanationText = styled.p<{ mt?: string }>`
  font-size: 1.125rem;
  color: ${GRAY};
  font-weight: 500;
  line-height: 1.8rem;
  margin-top: ${(props) => props.mt};
  max-width: 80%;
`;
