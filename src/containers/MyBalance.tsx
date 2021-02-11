import React from "react";
import styled from "styled-components";
import { Title } from "../components/Title";
import { GRAY, PURPLE } from "../colors";
import { PieChart } from "../components/PieChart";
import { TablePrices } from "../components/TablePrices";
import { Chevron } from "../components/Chevron";
import { FlexBox } from "../components/FlexBox";

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

const GrayText = styled.span`
  color: ${GRAY};
  font-weight: 500;
  font-size: 1.125rem;
`;

export const MyBalance: React.FC = () => {
  return (
    <>
      <section>
        <Title mt="64px">My Balance</Title>
        <BalanceAmount mt="16px">$465.6</BalanceAmount>
        <PieChart data={data} />
      </section>

      <section>
        <FlexBox jc="space-between" ai="center" mt="32px">
          <Title isSmall>Ticket's Prices</Title>

          <FlexBox ai="center">
            <GrayText>This month</GrayText>
            <Chevron ml="4px" />
          </FlexBox>
        </FlexBox>

        <TablePrices />
      </section>
    </>
  );
};
