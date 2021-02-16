import { FlexBox } from "../components/FlexBox";
import { Title } from "../components/Title";
import { CloseButton } from "../components/CloseButton";
import { ExplanationText } from "../components/ExplanationText";
import { BaseInput } from "../components/BaseInput";
import { BaseButton } from "../components/BaseButton";
import { BaseModal } from "../components/BaseModal";

type NewStockModalProps = {
  setModalIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  modalIsOpen: boolean;
};

export const NewStockModal: React.FC<NewStockModalProps> = ({
  setModalIsOpen,
  modalIsOpen,
}) => {
  return (
    <BaseModal
      isOpen={modalIsOpen}
      onRequestClose={() => setModalIsOpen(false)}
      contentLabel="Add Stocks Modal"
    >
      <FlexBox ai="center" jc="space-between" mt="16px">
        <Title>Add New Stocks</Title>
        <CloseButton onClick={() => setModalIsOpen(false)} />
      </FlexBox>

      <ExplanationText mt="16px">
        Enter the ticket name below into the search bar
      </ExplanationText>

      <section>
        <FlexBox mt="32px">
          <BaseInput placeholder="Ticker name" />
          <BaseButton ml="16px">Search</BaseButton>
        </FlexBox>
      </section>
    </BaseModal>
  );
};
