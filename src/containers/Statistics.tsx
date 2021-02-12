import { ExplanationText } from "../components/ExplanationText";
import { HorizontalBar } from "../components/HorizontalBar";
import { TableStats } from "../components/TableStats";
import { Title } from "../components/Title";

export const Statistics: React.FC = () => {
  return (
    <>
      <section>
        <Title mt="64px">Portfolio Goals & Statistics</Title>
        <ExplanationText mt="16px">
          See the staticstic about how close you are to the needed percentage of
          individul stock
        </ExplanationText>

        <TableStats />
      </section>
      <section>
        <Title mt="64px">Relative Goal Chart</Title>
        <ExplanationText mt="16px">
          Here is written how this parameter is calculated
        </ExplanationText>

        <HorizontalBar />
      </section>
    </>
  );
};
