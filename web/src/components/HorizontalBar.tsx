import { ResponsiveBar } from "@nivo/bar";
import styled from "styled-components";
import { YELLOW, PURPLE, ROSE, BLUE, DARK_BLUE } from "../utils/colors";
import { getOrdinalColorScale } from "@nivo/colors";

const HorizontalBarWrapper = styled.div`
  height: 360px;
`;

interface HorizontalBarProps {
  data: object[];
}

export const HorizontalBar: React.FC<HorizontalBarProps> = ({ data }) => (
  <HorizontalBarWrapper>
    <ResponsiveBar
      data={data}
      keys={["value"]}
      indexBy="id"
      margin={{ top: 50, right: 50, bottom: 50, left: 50 }}
      padding={0.35}
      layout="horizontal"
      valueScale={{ type: "linear" }}
      indexScale={{ type: "band", round: true }}
      colors={getOrdinalColorScale(
        [YELLOW, PURPLE, ROSE, BLUE, DARK_BLUE],
        "index"
      )}
      borderRadius={5}
      axisTop={null}
      axisRight={null}
      axisLeft={{
        tickSize: 0,
        tickPadding: 12,
        tickRotation: 0,
      }}
      enableGridX={true}
      enableGridY={false}
      enableLabel={false}
      animate={true}
      motionStiffness={90}
      motionDamping={15}
    />
  </HorizontalBarWrapper>
);
