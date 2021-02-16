import Modal from "react-modal";

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

type BaseModalProps = {
  onRequestClose?: (
    event: React.MouseEvent<Element, MouseEvent> | React.KeyboardEvent<Element>
  ) => void;
  isOpen: boolean;
  contentLabel: string;
};

export const BaseModal: React.FC<BaseModalProps> = ({
  onRequestClose,
  isOpen,
  contentLabel,
  children,
}) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={customStyles}
      contentLabel={contentLabel}
    >
      {children}
    </Modal>
  );
};
