import React from "react";
import styled from "styled-components";
import { Title } from "../components/Title";
import { PURPLE } from "../colors";
import { PieChart } from "../components/PieChart";

const BalanceAmount = styled.h1<{ mt?: string }>`
  font-size: 2.75rem;
  font-weight: 600;
  color: ${PURPLE};
  margin-top: ${(props) => props.mt};
`;

const data = [
  {
    id: "ruby",
    label: "ruby",
    value: 318,
  },
  {
    id: "hack",
    label: "hack",
    value: 237,
  },
  {
    id: "sass",
    label: "sass",
    value: 558,
  },
  {
    id: "python",
    label: "python",
    value: 209,
  },
  {
    id: "haskell",
    label: "haskell",
    value: 567,
  },
];

export const MyBalance: React.FC = () => {
  return (
    <>
      <Title mt="88px">My Balance</Title>
      <BalanceAmount mt="16px">$465.6</BalanceAmount>
      <PieChart data={data} />
    </>
  );
};
