import styled from "styled-components";
import { FlexBox } from "./FlexBox";
import { GRAY } from "../utils/colors";
import close from "../assets/close.svg";

type SettingsCardProps = {
  name: string;
};

const CardWrapper = styled(FlexBox)`
  padding: 12px 16px;
  border-radius: 16px;
  font-weight: 500;
  cursor: pointer;

  &:hover {
    background-color: ${GRAY}1a;
  }
`;

export const SettingsCard: React.FC<SettingsCardProps> = ({ name }) => {
  return (
    <CardWrapper ai="center" jc="space-between">
      {name}
      <img width={12} src={close} alt="delete" />
    </CardWrapper>
  );
};
