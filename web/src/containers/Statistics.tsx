import { ExplanationText } from "../components/ExplanationText";
import { HorizontalBar } from "../components/HorizontalBar";
import { TableStats } from "../components/TableStats";
import { Title } from "../components/Title";
import { mockData } from "../mockData";

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

        <HorizontalBar data={mockData} />
      </section>

      <section>
        <Title mt="64px">Pay Attention To</Title>
        <ExplanationText mt="16px">
          These stocks are way out of desired ratio. Keep an eye on them!
        </ExplanationText>

        <HorizontalBar data={mockData} />
      </section>
    </>
  );
};