import Modal from "react-modal";
import { FlexBox } from "./FlexBox";
import { Title } from "./Title";
import { CloseButton } from "./CloseButton";
import { ExplanationText } from "./ExplanationText";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "30%",
    maxHeight: "60%",
    border: 0,
    borderRadius: "20px",
    paddingLeft: "44px",
    paddingRight: "44px",
  },
};

type BaseModalProps = {
  onRequestClose?: (
    event: React.MouseEvent<Element, MouseEvent> | React.KeyboardEvent<Element>
  ) => void;
  isOpen: boolean;
  contentLabel: string;
  explanationText: string;
};

export const BaseModal: React.FC<BaseModalProps> = ({
  onRequestClose,
  isOpen,
  contentLabel,
  explanationText,
  children,
}) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={customStyles}
      contentLabel={contentLabel}
    >
      <FlexBox ai="center" jc="space-between" mt="16px">
        <Title>{contentLabel}</Title>
        <CloseButton onClick={onRequestClose} />
      </FlexBox>

      <ExplanationText mt="16px">{explanationText}</ExplanationText>
      {children}
    </Modal>
  );
};
