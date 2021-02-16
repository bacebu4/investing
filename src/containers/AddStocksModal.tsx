import { useRef } from "react";
import Select from "react-select";
import { FlexBox } from "../components/FlexBox";
import { GrayUppercaseText } from "../components/GrayUppercaseText";
import { MultiSelect } from "../components/MultiSelect";
import { BaseInput } from "../components/BaseInput";
import { BaseButton } from "../components/BaseButton";
import { BaseModal } from "../components/BaseModal";

type AddStocksModalProps = {
  setModalIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  modalIsOpen: boolean;
};

const options = [
  { value: "month", label: "This month" },
  { value: "day", label: "This day" },
];

export const AddStocksModal: React.FC<AddStocksModalProps> = ({
  setModalIsOpen,
  modalIsOpen,
}) => {
  const selectRef = useRef<Select | null>(null);

  return (
    <BaseModal
      isOpen={modalIsOpen}
      onRequestClose={() => setModalIsOpen(false)}
      contentLabel="Add Stocks"
      explanationText="When you are adding stocks it is increasing the amount of the stocks you
      have"
    >
      <section>
        <GrayUppercaseText mt="32px" mb="8px">
          Choose ticket name #1
        </GrayUppercaseText>

        <MultiSelect
          forwardRef={selectRef}
          options={options}
          defaultValue={options[0]}
          // onChange={() => console.log(selectRef.current?.state.value)}
        />

        <GrayUppercaseText mt="32px" mb="8px">
          Amount #1
        </GrayUppercaseText>

        <FlexBox>
          <BaseInput placeholder="Enter amount of stocks you've bought" />
        </FlexBox>
      </section>

      <section>
        <GrayUppercaseText mt="64px" mb="8px">
          Choose ticket name #2
        </GrayUppercaseText>

        <MultiSelect
          forwardRef={selectRef}
          options={options}
          defaultValue={options[0]}
          // onChange={() => console.log(selectRef.current?.state.value)}
        />

        <GrayUppercaseText mt="32px" mb="8px">
          Amount #2
        </GrayUppercaseText>

        <FlexBox>
          <BaseInput placeholder="Enter amount of stocks you've bought" />
        </FlexBox>
      </section>

      <FlexBox mt="32px">
        <BaseButton color="gray">Add more fields</BaseButton>
      </FlexBox>

      <FlexBox mt="32px">
        <BaseButton color="vivid red">Cancel</BaseButton>
        <BaseButton isSolid ml="16px" color="purple">
          Save
        </BaseButton>
      </FlexBox>
    </BaseModal>
  );
};
