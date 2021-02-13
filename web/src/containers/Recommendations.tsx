import { BaseInput } from "../components/BaseInput";
import { ExplanationText } from "../components/ExplanationText";
import { Title } from "../components/Title";

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
        <BaseInput placeholder="Enter the amount money here" mt="44px" />
      </section>

      <section>
        <Title mt="64px">Your Recommendations are here</Title>
        <ExplanationText mt="16px">
          Buy the calculated amount of stocks in order to get close to the
          desired ratio
        </ExplanationText>
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
