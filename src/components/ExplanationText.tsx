import styled from "styled-components";
import { GRAY } from "../colors";

export const ExplanationText = styled.p<{ mt?: string }>`
  font-size: 1rem;
  color: ${GRAY};
  font-weight: 400;
  line-height: 1.6rem;
  margin-top: ${(props) => props.mt};
  max-width: 80%;
`;
