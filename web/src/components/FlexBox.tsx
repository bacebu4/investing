import styled from "styled-components";

interface FlexBoxProps {
  jc?:
    | "space-around"
    | "space-between"
    | "space-evenly"
    | "stretch"
    | "center"
    | "end"
    | "flex-end"
    | "flex-start";
  ai?:
    | "center"
    | "end"
    | "flex-end"
    | "flex-start"
    | "self-end"
    | "self-start"
    | "start"
    | "baseline"
    | "normal"
    | "stretch";
  mt?: string;
  ml?: string;
  pr?: string;
  direction?: "column";
}

export const FlexBox = styled.div<FlexBoxProps>`
  display: flex;
  flex-direction: ${(props) => props.direction};
  justify-content: ${(props) => props.jc};
  align-items: ${(props) => props.ai};
  margin-left: ${(props) => props.ml};
  margin-top: ${(props) => props.mt};
  padding-right: ${(props) => props.pr};
`;
