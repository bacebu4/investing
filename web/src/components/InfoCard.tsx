import styled from "styled-components";
import { hexToRgb, RED } from "../utils/colors";
import warning from "../assets/warning.svg";
import { FlexBox } from "./FlexBox";

type InfoCardProps = {
  name: string;
  message: string;
};

const InfoCardWrapper = styled.span`
  display: inline-block;
  padding: 12px 16px;
  background-color: rgba(${hexToRgb(RED)}, 0.1);
  border-radius: 16px;
  color: ${RED};
`;

const NameWrapper = styled.span`
  font-weight: 600;
  margin-left: 12px;
  margin-right: 4px;
`;

export const InfoCard: React.FC<InfoCardProps> = ({ name, message }) => {
  return (
    <InfoCardWrapper>
      <FlexBox ai="center">
        <img src={warning} alt="warning" />
        <NameWrapper>{name}</NameWrapper> {" – " + message}
      </FlexBox>
    </InfoCardWrapper>
  );
};
