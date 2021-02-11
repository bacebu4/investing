import { ExplanationText } from "../components/ExplanationText";
import { Title } from "../components/Title";
import { Navbar } from "./Navbar";

export const Statistics: React.FC = () => {
  return (
    <>
      <Navbar />
      <section>
        <Title mt="64px">Portfolio Goals & Statistics</Title>
        <ExplanationText mt="16px">
          See the staticstic about how close you are to the needed percentage of
          individul stock
        </ExplanationText>
      </section>
    </>
  );
};
