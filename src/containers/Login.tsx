import { BaseInput } from "../components/BaseInput";
import { FlexBox } from "../components/FlexBox";
import { GrayUppercaseText } from "../components/GrayUppercaseText";
import { BaseButton } from "../components/BaseButton";
import { BaseLink } from "../components/BaseLink";
import { Logo } from "../components/Logo";

export const Login: React.FC = () => {
  return (
    <div>
      <Logo />

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
        <BaseButton>Login</BaseButton>
      </FlexBox>

      <FlexBox w="300px" mt="44px">
        <BaseLink>Forgot your password?</BaseLink>
      </FlexBox>
    </div>
  );
};
