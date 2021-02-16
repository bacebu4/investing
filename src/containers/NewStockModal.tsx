import { FlexBox } from "../components/FlexBox";
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
      explanationText="Enter the ticket name below into the search bar"
    >
      <section>
        <FlexBox mt="32px">
          <BaseInput placeholder="Ticker name" />
          <BaseButton ml="16px">Search</BaseButton>
        </FlexBox>
      </section>
    </BaseModal>
  );
};
