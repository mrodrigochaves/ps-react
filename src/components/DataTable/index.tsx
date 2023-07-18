import { Table, TableCaption, TableContainer, Thead, Tr, Th, Tbody, Td, Tfoot } from "@chakra-ui/react";
import { CSSProperties } from "react";
import { tableStyles } from "./styles";

interface TableCellProps {
  isNumeric?: boolean;
  children?: React.ReactNode;
}

function TableCell({ isNumeric, children }: TableCellProps) {
  const cellStyles: CSSProperties = {
    ...tableStyles.solidBorder,
  };

  return (
    <Td style={cellStyles} isNumeric={isNumeric}>
      {children}
    </Td>
  );
}

export function DataTable() {
  return (
    <TableContainer overflowX="auto" padding="2%">
      <Table variant="simple" width="100%">
        <TableCaption>Informações sobre conta dos clientes</TableCaption>
        <Thead>
          <Tr border="solid 1px #000">
            <Th borderBottom="solid 1px #000" textColor="#000">
              Saldo Total: R$ 
            </Th>
            <Th borderBottom="solid 1px #000" textColor="#000">
              Saldo no periodo: R$ 
            </Th>
          </Tr>
        </Thead>
        <Thead>
          <Tr>
            <TableCell>Dados</TableCell>
            <TableCell isNumeric>Valência</TableCell>
            <TableCell>Tipo</TableCell>
            <TableCell>Nome do operador transacionado</TableCell>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <TableCell>14/02/2019</TableCell>
            <TableCell isNumeric>R$ 30895,46</TableCell>
            <TableCell>depósito</TableCell>
            <TableCell></TableCell>
          </Tr>
          <Tr>
            <TableCell>12/04/2019</TableCell>
            <TableCell isNumeric>R$ 12,24</TableCell>
            <TableCell>Transferência Entrada</TableCell>
            <TableCell>Fulano</TableCell>
          </Tr>
          <Tr>
            <TableCell>11/06/2020</TableCell>
            <TableCell isNumeric>R$ -500,50</TableCell>
            <TableCell>Transferência de Saída</TableCell>
            <TableCell>Sicrano</TableCell>
          </Tr>
        </Tbody>
        <Tfoot>
          <Tr>
            <TableCell>11/06/2020</TableCell>
            <TableCell isNumeric>R$ -1234,00</TableCell>
            <TableCell>Saque</TableCell>
            <TableCell></TableCell>
          </Tr>
        </Tfoot>
      </Table>
    </TableContainer>
  );
}
