import styled from "styled-components";
import { GRAY } from "../utils/colors";

type GrayUppercaseTextProps = {
  mt?: string;
  mb?: string;
};

export const GrayUppercaseText = styled.h2<GrayUppercaseTextProps>`
  color: ${GRAY};
  font-weight: 600;
  text-transform: uppercase;
  margin-top: ${(props) => props.mt};
  margin-bottom: ${(props) => props.mb};
`;
