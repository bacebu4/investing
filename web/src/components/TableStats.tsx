import styled from "styled-components";
import { Table, Th, Tr, Td } from "./TableComponents";

const TableScrollableYWrapper = styled.div`
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;
  padding-right: 32px;

  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const TableStats = () => {
  return (
    <TableScrollableYWrapper>
      <Table mt="44px">
        <thead>
          <tr>
            <Th>Name</Th>
            <Th>Price</Th>
            <Th>Amount</Th>
            <Th>Total</Th>
            <Th>Total, %</Th>
            <Th>Goal, %</Th>
            <Th>Relative Goal, %</Th>
          </tr>
        </thead>
        <tbody>
          <Tr>
            <Td>James</Td>
            <Td>MaTman</Td>
            <Td>12</Td>
            <Td>Lettuce </Td>
            <Td>42.98%</Td>
            <Td isBold>13%</Td>
            <Td isBold color={Math.abs(5) >= 10 ? "red" : "gray"}>
              +5%
            </Td>
          </Tr>
          <Tr>
            <Td>The</Td>
            <Td>Tick</Td>
            <Td>435</Td>
            <Td>Blue</Td>
            <Td>42.40%</Td>
            <Td isBold>10%</Td>
            <Td isBold color={Math.abs(4) >= 10 ? "red" : "gray"}>
              +4%
            </Td>
          </Tr>
          <Tr>
            <Td>Jokey</Td>
            <Td>Smurf</Td>
            <Td>324</Td>
            <Td>Smurflow</Td>
            <Td>12.44%</Td>
            <Td isBold>15%</Td>
            <Td isBold color={Math.abs(-12) >= 10 ? "red" : "gray"}>
              -12%
            </Td>
          </Tr>
          <Tr>
            <Td>Cindy</Td>
            <Td>Beyler</Td>
            <Td>4</Td>
            <Td>Red</Td>
            <Td>34.42%</Td>
            <Td isBold>20%</Td>
            <Td isBold color={Math.abs(43) >= 10 ? "red" : "gray"}>
              +43%
            </Td>
          </Tr>
          <Tr>
            <Td>Captain</Td>
            <Td>Cool</Td>
            <Td>42</Td>
            <Td>Blue</Td>
            <Td>34.33%</Td>
            <Td isBold>25%</Td>
            <Td isBold color={Math.abs(5) >= 10 ? "red" : "gray"}>
              -5%
            </Td>
          </Tr>
        </tbody>
      </Table>
    </TableScrollableYWrapper>
  );
};
