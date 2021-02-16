import React from "react";
import { ExplanationText } from "../components/ExplanationText";
import { HorizontalBar } from "../components/HorizontalBar";
import { InfoCard } from "../components/InfoCard";
import { TableStats } from "../components/TableStats";
import { Title } from "../components/Title";
import { mockData } from "../mockData";

export const Statistics: React.FC = () => {
  return (
    <>
      <section>
        <Title mt="64px">Portfolio Goals & Statistics</Title>

        <ExplanationText mt="16px">
          See the statistic about how close you are to the needed percentage of
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

        <InfoCard
          name="CHMF"
          message="You have 16% less of them than needed"
          variant="warning"
          mt="32px"
        />
        <InfoCard
          name="FXIM"
          message="You have 50% more of them than needed"
          variant="danger"
          mt="16px"
        />
      </section>
    </>
  );
};
