import React from "react";
import styled from "styled-components";
import { Title } from "../components/Title";
import { PURPLE } from "../colors";
import { PieChart } from "../components/PieChart";
import { Table, Td, Tr } from "../components/TableComponents";

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

const FlexRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 32px;
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
        <FlexRow>
          <Title isSmall>Ticket's Prices</Title>
          This month
        </FlexRow>

        <Table mt="24px">
          <tbody>
            <Tr>
              <Td>CHMF</Td>
              <Td>13.43</Td>
            </Tr>
            <Tr>
              <Td>FXUS</Td>
              <Td>13.43</Td>
            </Tr>
            <Tr>
              <Td>FXTB</Td>
              <Td>13.43</Td>
            </Tr>
            <Tr>
              <Td>FXWO</Td>
              <Td>13.43</Td>
            </Tr>
          </tbody>
        </Table>
      </section>
    </>
  );
};
