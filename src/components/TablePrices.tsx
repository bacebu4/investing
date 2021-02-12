import React from "react";
import { Table, Tr, Td } from "./TableComponents";

export const TablePrices: React.FC = () => {
  return (
    <Table mt="24px" mb="24px">
      <tbody>
        <Tr>
          <Td>CHMF</Td>
          <Td textAlign="right" isMedium color="green">
            13.43%
          </Td>
        </Tr>
        <Tr>
          <Td>FXUS</Td>
          <Td textAlign="right" isMedium color="red">
            -13.43%
          </Td>
        </Tr>
        <Tr>
          <Td>FXTB</Td>
          <Td textAlign="right" isMedium color="red">
            -13.43%
          </Td>
        </Tr>
        <Tr>
          <Td>FXWO</Td>
          <Td textAlign="right" isMedium color="green">
            13.43%
          </Td>
        </Tr>
        <Tr>
          <Td>FXTB</Td>
          <Td textAlign="right" isMedium color="red">
            -13.43%
          </Td>
        </Tr>
        <Tr>
          <Td>FXWO</Td>
          <Td textAlign="right" isMedium color="green">
            13.43%
          </Td>
        </Tr>
      </tbody>
    </Table>
  );
};
