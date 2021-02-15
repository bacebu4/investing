import { ResponsivePie } from "@nivo/pie";
import styled from "styled-components";
import { YELLOW, PURPLE, ROSE, BLUE, DARK_BLUE } from "../utils/colors";

const PieChartWrapper = styled.div`
  height: 360px;
  margin-top: 52px;
`;

interface PieChartProps {
  data: unknown[];
}

export const PieChart: React.FC<PieChartProps> = ({ data }) => (
  <PieChartWrapper>
    <ResponsivePie
      data={data}
      margin={{ top: 0, right: 100, bottom: 30, left: 90 }}
      innerRadius={0.5}
      padAngle={2}
      cornerRadius={8}
      colors={[YELLOW, PURPLE, ROSE, BLUE, DARK_BLUE]}
      radialLabel={(e) => {
        return `${e.id.toString().toUpperCase()} ${e.value}%`;
      }}
      radialLabelsLinkStrokeWidth={0}
      radialLabelsTextXOffset={0}
      radialLabelsSkipAngle={10}
      radialLabelsTextColor="#383838"
      radialLabelsLinkHorizontalLength={0}
      enableSliceLabels={false}
    />
  </PieChartWrapper>
);
