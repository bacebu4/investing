import React from "react";
import { BaseInput } from "../components/BaseInput";
import { ExplanationText } from "../components/ExplanationText";
import { Title } from "../components/Title";
import { BaseButton } from "../components/BaseButton";
import { FlexBox } from "../components/FlexBox";
import { InfoCard } from "../components/InfoCard";

export const Recommendations: React.FC = () => {
  return (
    <>
      <section>
        <Title mt="64px">Calculate the Recommendations</Title>
        <ExplanationText mt="16px">
          Enter below the amount of money you want to invest right now and
          you’ll get the concrete amount of each stock you should buy in order
          to get close to the desired ratio
        </ExplanationText>

        <FlexBox mt="44px" pr="32px">
          <BaseInput placeholder="Enter the amount money here" />
          <BaseButton ml="16px">Calculate</BaseButton>
        </FlexBox>
      </section>

      <section>
        <Title mt="64px">Your Recommendations are here</Title>
        <ExplanationText mt="16px">
          Buy the calculated amount of stocks in order to get close to the
          desired ratio
        </ExplanationText>

        <InfoCard
          name="CHMF"
          message="You need to buy 5 qt."
          variant="success"
          mt="32px"
        />
        <InfoCard
          name="FXIM"
          message="You need to buy 55 qt."
          variant="success"
          mt="16px"
        />
      </section>

      <section>
        <Title mt="64px">Automatically add to the portfolio</Title>
        <ExplanationText mt="16px">
          Click the button below if you’ve just bought the recommended amount.
        </ExplanationText>
      </section>
    </>
  );
};
