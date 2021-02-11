import styled from "styled-components";
import { Table, Th, Tr, Td } from "./TableComponents";

const TableWrapper = styled.div`
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;
`;

export const TableStats = () => {
  return (
    <TableWrapper>
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
            <Td>Trek</Td>
            <Td>Digby </Td>
            <Td>5%</Td>
          </Tr>
          <Tr>
            <Td>The</Td>
            <Td>Tick</Td>
            <Td>435</Td>
            <Td>Blue</Td>
            <Td>Wars</Td>
            <Td>John </Td>
            <Td>4%</Td>
          </Tr>
          <Tr>
            <Td>Jokey</Td>
            <Td>Smurf</Td>
            <Td>324</Td>
            <Td>Smurflow</Td>
            <Td>Smurf</Td>
            <Td>Smurflane </Td>
            <Td>4%</Td>
          </Tr>
          <Tr>
            <Td>Cindy</Td>
            <Td>Beyler</Td>
            <Td>4</Td>
            <Td>Red</Td>
            <Td>Wars</Td>
            <Td>Lori </Td>
            <Td>43%</Td>
          </Tr>
          <Tr>
            <Td>Captain</Td>
            <Td>Cool</Td>
            <Td>42</Td>
            <Td>Blue</Td>
            <Td>Wars</Td>
            <Td>42nd</Td>
            <Td>45%</Td>
          </Tr>
        </tbody>
      </Table>
    </TableWrapper>
  );
};
