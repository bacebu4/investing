import styled from "styled-components";
import Select from "react-select";
import { GRAY } from "../utils/colors";

const MultiSelectProto = styled(Select)`
  & .Select__control {
    background-color: ${GRAY}1A;
    border: 0;
    border-radius: 16px;
    font-size: 1rem;
    padding: 7px 3px;
    cursor: pointer;
  }
`;

export const MultiSelect = (props: any) => {
  const { forwardRef, ...restProps } = props;

  return (
    <MultiSelectProto
      ref={forwardRef}
      classNamePrefix={"Select"}
      {...restProps}
    />
  );
};
