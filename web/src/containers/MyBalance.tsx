import React, { useRef } from "react";
import styled from "styled-components";
import { Title } from "../components/Title";
import { GRAY, PURPLE, DARK } from "../utils/colors";
import { PieChart } from "../components/PieChart";
import { TablePrices } from "../components/TablePrices";
import { FlexBox } from "../components/FlexBox";
import { mockData } from "../mockData";
import { AddButton } from "../components/AddButton";
import Select from "react-select";

const BalanceAmount = styled.h1<{ mt?: string }>`
  font-size: 2.75rem;
  font-weight: 600;
  color: ${PURPLE};
  margin-top: ${(props) => props.mt};
`;

const GrayText = styled.h2`
  color: ${GRAY};
  font-weight: 600;
  text-transform: uppercase;
  margin-top: 32px;
  margin-bottom: 8px;
`;

const options = [
  { value: "month", label: "This month" },
  { value: "day", label: "This day" },
];

export const MyBalance: React.FC = () => {
  const selectRef = useRef<Select | null>(null);

  console.log(selectRef.current);

  return (
    <>
      <section>
        <FlexBox mt="64px" ai="center" jc="space-between">
          <Title>My Balance</Title>
          <AddButton />
        </FlexBox>

        <BalanceAmount mt="12px">$465.6</BalanceAmount>
        <PieChart data={mockData} />
      </section>

      <section>
        <GrayText>Ticket's Prices</GrayText>

        <Select
          ref={selectRef}
          options={options}
          defaultValue={options[0]}
          onChange={() => console.log(selectRef.current?.state.value)}
          styles={{
            option: (provided) => ({
              ...provided,
              backgroundColor: "#ffffff",
              color: DARK,
              padding: 20,
            }),
          }}
        />

        <TablePrices />
      </section>
    </>
  );
};
