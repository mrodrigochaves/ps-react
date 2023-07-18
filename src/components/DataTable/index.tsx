
import { Container,Table, TableCaption, TableContainer, Thead, Tr, Th, Tbody, Td, Tfoot } from "@chakra-ui/react";


export function DataTable() {
  return (
    
      <div>
        <Container maxW='4xl' centerContent>
        <TableContainer>
          <Table variant='simple'>
            <TableCaption>Informações sobre conta dos clientes</TableCaption>
            <Thead>
              <Tr>
                <Th>Dados</Th>
                <Th isNumeric>Valência</Th>
                <Th>Tipo</Th>
                <Th>Nome do operador transacionado</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>14/02/2019</Td>
                <Td isNumeric>R$ 30895,46</Td>
                <Td>depósito</Td>
                <Td >25.4</Td>
              </Tr>
              <Tr>
                <Td>12/04/2019</Td>
                <Td isNumeric>R$ 12,24</Td>
                <Td>Transferência Entrada</Td>
                <Td >30.48</Td>
              </Tr>
              <Tr>
                <Td>11/06/2020</Td>
                <Td isNumeric>R$ -500,50</Td>
                <Td>Transferência de Saída</Td>
                <Td >0.91444</Td>
              </Tr>
            </Tbody>
            <Tfoot>
              <Tr>
                <Td>11/06/2020</Td>
                <Td isNumeric>R$ -1234,00</Td>
                <Td>Saque</Td>
                <Td >0.91444</Td>
              </Tr>
            </Tfoot>
          </Table>
        </TableContainer>
        </Container>
      </div>
  
  );
}
