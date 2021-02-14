import Modal from "react-modal";
import { FlexBox } from "../components/FlexBox";
import { Title } from "../components/Title";
import { CloseButton } from "../components/CloseButton";
import { ExplanationText } from "../components/ExplanationText";
import { GrayUppercaseText } from "../components/GrayUppercaseText";
import { MultiSelect } from "../components/MultiSelect";
import { useRef } from "react";
import Select from "react-select";
import { BaseInput } from "../components/BaseInput";

type AddStocksModalProps = {
  setModalIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  modalIsOpen: boolean;
};

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

export const AddStocksModal: React.FC<AddStocksModalProps> = ({
  setModalIsOpen,
  modalIsOpen,
}) => {
  const selectRef = useRef<Select | null>(null);

  return (
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
        When you are adding stocks it is increasing the amount of the stocks you
        have
      </ExplanationText>

      <GrayUppercaseText mt="32px" mb="8px">
        Choose ticket name
      </GrayUppercaseText>

      <MultiSelect
        forwardRef={selectRef}
        options={options}
        defaultValue={options[0]}
        onChange={() => console.log(selectRef.current?.state.value)}
      />

      <GrayUppercaseText mt="32px" mb="8px">
        Amount
      </GrayUppercaseText>

      <FlexBox>
        <BaseInput placeholder="Enter amount of stocks you've bought" />
      </FlexBox>
    </Modal>
  );
};
