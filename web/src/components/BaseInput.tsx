import styled from "styled-components";
import { GRAY, DARK } from "../utils/colors";

export const BaseInput = styled.input`
  color: ${DARK};
  background-color: ${GRAY}1A;
  width: 80%;
  font-family: inherit;
  border: 0;
  padding: 12px 16px;
  border-radius: 16px;
  outline: 0;

  ::placeholder {
    /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: ${GRAY};
    opacity: 1; /* Firefox */
  }

  :-ms-input-placeholder {
    /* Internet Explorer 10-11 */
    color: ${GRAY};
  }

  ::-ms-input-placeholder {
    /* Microsoft Edge */
    color: ${GRAY};
  }
`;
