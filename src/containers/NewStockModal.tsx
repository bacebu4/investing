import Modal from "react-modal";
import { FlexBox } from "../components/FlexBox";
import { Title } from "../components/Title";
import { CloseButton } from "../components/CloseButton";
import { ExplanationText } from "../components/ExplanationText";
import { BaseInput } from "../components/BaseInput";
import { BaseButton } from "../components/BaseButton";

type NewStockModalProps = {
  setModalIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  modalIsOpen: boolean;
};

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

export const NewStockModal: React.FC<NewStockModalProps> = ({
  setModalIsOpen,
  modalIsOpen,
}) => {
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={() => setModalIsOpen(false)}
      style={customStyles}
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
    </Modal>
  );
};
