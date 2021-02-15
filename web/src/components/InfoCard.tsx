import styled from "styled-components";
import { colorSwitcher } from "../utils/colors";
import warning from "../assets/warning.svg";
import danger from "../assets/danger.svg";
import success from "../assets/success.svg";
import { FlexBox } from "./FlexBox";

type VariantProps = "success" | "warning" | "danger";

function imageSwitcher(variant: VariantProps) {
  switch (variant) {
    case "danger":
      return danger;

    case "success":
      return success;

    case "warning":
      return warning;

    default:
      return warning;
  }
}

type InfoCardProps = {
  name: string;
  message: string;
  variant: VariantProps;
  mt: string;
};

type InfoCardWrapperProps = {
  variant: VariantProps;
  mt: string;
};

const InfoCardWrapper = styled.span<InfoCardWrapperProps>`
  display: inline-block;
  padding: 12px 16px;
  background-color: ${(props) => colorSwitcher(props.variant)}1a;
  border-radius: 16px;
  color: ${(props) => colorSwitcher(props.variant)};
  margin-top: ${(props) => props.mt};
`;

const NameWrapper = styled.span`
  font-weight: 600;
  margin-left: 8px;
  margin-right: 4px;
`;

export const InfoCard: React.FC<InfoCardProps> = ({
  name,
  message,
  variant,
  mt,
}) => {
  return (
    <div>
      <InfoCardWrapper variant={variant} mt={mt}>
        <FlexBox ai="center">
          <img src={imageSwitcher(variant)} alt="warning" />
          <NameWrapper>{name}</NameWrapper> {message}
        </FlexBox>
      </InfoCardWrapper>
    </div>
  );
};
