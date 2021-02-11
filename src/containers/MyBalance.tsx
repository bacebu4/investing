import React from "react";
import styled from "styled-components";
import { Title } from "../components/Title";
import { PURPLE } from "../colors";

const BalanceAmount = styled.h1<{ mt?: string }>`
  font-size: 2.75rem;
  font-weight: 600;
  color: ${PURPLE};
  margin-top: ${(props) => props.mt};
`;

export const MyBalance: React.FC = () => {
  return (
    <>
      <Title mt="88px">My Balance</Title>
      <BalanceAmount mt="16px">$465.6</BalanceAmount>
    </>
  );
};
