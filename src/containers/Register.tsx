import styled from "styled-components";
import { BaseInput } from "../components/BaseInput";
import { FlexBox } from "../components/FlexBox";
import { GrayUppercaseText } from "../components/GrayUppercaseText";
import { BaseButton } from "../components/BaseButton";
import { BaseLink } from "../components/BaseLink";
import logo from "../assets/logo.png";

const MainTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: 600;
  margin-left: 16px;
`;

export const Register: React.FC = () => {
  return (
    <div>
      <FlexBox jc="center" ai="center" w="300px">
        <img src={logo} width={144} alt="chart logo" />
        <MainTitle>Rational Invest</MainTitle>
      </FlexBox>

      <GrayUppercaseText mb="8px" mt="44px">
        Email
      </GrayUppercaseText>
      <FlexBox w="300px">
        <BaseInput placeholder="Enter your email here" />
      </FlexBox>

      <GrayUppercaseText mb="8px" mt="32px">
        Password
      </GrayUppercaseText>
      <FlexBox w="300px">
        <BaseInput placeholder="Enter your password here" />
      </FlexBox>

      <FlexBox w="300px" mt="44px">
        <BaseButton isSolid>Register</BaseButton>
      </FlexBox>

      <FlexBox w="300px" mt="44px">
        <BaseLink>Already have an account?</BaseLink>
      </FlexBox>
    </div>
  );
};
