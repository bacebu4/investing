import styled from "styled-components";
import { FlexBox } from "./FlexBox";
import logo from "../assets/logo.png";

const MainTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: 600;
  margin-left: 16px;
`;

export const Logo: React.FC = () => {
  return (
    <FlexBox jc="center" ai="center" w="300px">
      <img src={logo} width={144} alt="chart logo" />
      <MainTitle>Rational Invest</MainTitle>
    </FlexBox>
  );
};
