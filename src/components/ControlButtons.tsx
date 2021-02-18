import { FlexBox } from "./FlexBox";
import { BaseButton } from "./BaseButton";

type ControlButtonsProps = {
  onAccept?:
    | ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void)
    | undefined;
  onDecline?:
    | ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void)
    | undefined;
  mt: string;
};

export const ControlButtons: React.FC<ControlButtonsProps> = ({
  onAccept,
  onDecline,
  mt,
}) => {
  return (
    <FlexBox mt={mt}>
      <BaseButton onClick={onDecline} color="vivid red">
        Cancel
      </BaseButton>
      <BaseButton onClick={onAccept} isSolid ml="16px" color="purple">
        Save
      </BaseButton>
    </FlexBox>
  );
};
