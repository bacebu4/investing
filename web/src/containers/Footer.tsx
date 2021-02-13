import React from "react";
import styled from "styled-components";
import { FlexBox } from "../components/FlexBox";
import { GRAY } from "../utils/colors";

const FooterWrapper = styled.footer`
  font-weight: 600;
  color: ${GRAY};
  padding-bottom: 32px;
  margin-top: 64px;
`;

export const Footer: React.FC = () => {
  return <FooterWrapper>© 2021 bacebu4, Inc</FooterWrapper>;
};
