import { ResponsiveBar } from "@nivo/bar";
import styled from "styled-components";
import { YELLOW, PURPLE, ROSE, BLUE, DARK_BLUE } from "../colors";

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
      // @ts-ignore
      colorBy="index"
      margin={{ top: 50, right: 50, bottom: 50, left: 50 }}
      padding={0.35}
      layout="horizontal"
      valueScale={{ type: "linear" }}
      indexScale={{ type: "band", round: true }}
      colors={[YELLOW, PURPLE, ROSE, BLUE, DARK_BLUE]}
      borderRadius={5}
      axisTop={null}
      axisRight={null}
      enableGridX={true}
      enableGridY={false}
      enableLabel={false}
      animate={true}
      motionStiffness={90}
      motionDamping={15}
    />
  </HorizontalBarWrapper>
);
