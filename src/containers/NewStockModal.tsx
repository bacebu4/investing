import { FlexBox } from "../components/FlexBox";
import { BaseInput } from "../components/BaseInput";
import { BaseButton } from "../components/BaseButton";
import { BaseModal } from "../components/BaseModal";
import { GrayUppercaseText } from "../components/GrayUppercaseText";
import { SearchResultCard } from "../components/SearchResultCard";

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

      <section>
        <GrayUppercaseText mt="32px" mb="16px">
          Search results
        </GrayUppercaseText>

        <SearchResultCard name="CHMF" isSelected={false} />
        <SearchResultCard name="FXIM" isSelected={false} />
        <SearchResultCard name="FXTB" isSelected />
        <SearchResultCard name="FXWO" isSelected={false} />
      </section>

      <FlexBox mt="32px">
        <BaseButton color="vivid red">Cancel</BaseButton>
        <BaseButton isSolid ml="16px" color="purple">
          Apply
        </BaseButton>
      </FlexBox>
    </BaseModal>
  );
};
