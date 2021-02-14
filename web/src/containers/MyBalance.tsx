import React, { useRef, useState } from "react";
import styled from "styled-components";
import { Title } from "../components/Title";
import { PURPLE, DARK, LIGHT_GRAY, GRAY } from "../utils/colors";
import { PieChart } from "../components/PieChart";
import { TablePrices } from "../components/TablePrices";
import { FlexBox } from "../components/FlexBox";
import { mockData } from "../mockData";
import { AddButton } from "../components/AddButton";
import Select from "react-select";
import Modal from "react-modal";
import { CloseButton } from "../components/CloseButton";
import { GrayUppercaseText } from "../components/GrayUppercaseText";
import { ExplanationText } from "../components/ExplanationText";

const MultiSelect = styled(Select)`
  & .Select__control {
    background-color: ${GRAY}1A;
    border: 0;
    border-radius: 10px;
  }
`;

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

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "30%",
    height: "60%",
    border: 0,
    borderRadius: "20px",
    paddingLeft: "44px",
    paddingRight: "44px",
  },
};

export const MyBalance: React.FC = () => {
  const selectRef = useRef<Select | null>(null);

  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <FlexBox ai="center" jc="space-between" mt="16px">
          <Title>Add stocks</Title>
          <CloseButton onClick={() => setModalIsOpen(false)} />
        </FlexBox>

        <ExplanationText mt="16px">
          When you are adding stocks it is increasing the amount of the stocks
          you have
        </ExplanationText>

        <GrayUppercaseText mt="32px" mb="8px">
          Choose ticket name
        </GrayUppercaseText>

        <MultiSelect
          classNamePrefix={"Select"}
          ref={selectRef}
          options={options}
          defaultValue={options[0]}
          onChange={() => console.log(selectRef.current?.state.value)}
        />
      </Modal>

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
          Ticket's Prices
        </GrayUppercaseText>

        <MultiSelect
          ref={selectRef}
          classNamePrefix={"Select"}
          options={options}
          defaultValue={options[0]}
          onChange={() => console.log(selectRef.current?.state.value)}
        />

        <TablePrices />
      </section>
    </>
  );
};
