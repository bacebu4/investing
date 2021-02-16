import React, { useRef, useState } from "react";
import styled from "styled-components";
import Select from "react-select";
import { Title } from "../components/Title";
import { PURPLE } from "../utils/colors";
import { PieChart } from "../components/PieChart";
import { TablePrices } from "../components/TablePrices";
import { FlexBox } from "../components/FlexBox";
import { mockData } from "../mockData";
import { AddButton } from "../components/AddButton";
import { GrayUppercaseText } from "../components/GrayUppercaseText";
import { MultiSelect } from "../components/MultiSelect";
import { AddStocksModal } from "./AddStocksModal";

const BalanceAmount = styled.h1<{ mt?: string }>`
  font-size: 2.75rem;
  font-weight: 600;
  color: ${PURPLE};
  margin-top: ${(props) => props.mt};
`;

const options = [
  { value: "month", label: "This month" },
  { value: "day", label: "This day" },
];

export const MyBalance: React.FC = () => {
  const selectRef = useRef<Select | null>(null);

  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <>
      <AddStocksModal
        modalIsOpen={modalIsOpen}
        setModalIsOpen={setModalIsOpen}
      />

      <section>
        <FlexBox mt="64px" ai="center" jc="space-between">
          <Title>My Balance</Title>
          <AddButton onClick={() => setModalIsOpen(true)} />
        </FlexBox>

        <BalanceAmount mt="12px">$465.6</BalanceAmount>
        <PieChart data={mockData} />
      </section>

      <section>
        <GrayUppercaseText mt="32px" mb="8px">
          Ticket&apos;s Prices
        </GrayUppercaseText>

        <MultiSelect
          forwardRef={selectRef}
          options={options}
          defaultValue={options[0]}
          // onChange={() => console.log(selectRef.current?.state.value)}
        />

        <TablePrices />
      </section>
    </>
  );
};
