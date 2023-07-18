import { Input, Stack, Text, Box, Button, Td, TableContainer, Table, TableCaption, Thead, Tr, Th, Tbody, Tfoot } from "@chakra-ui/react";
import { inputStyles, containerStyles, labelStyles, tableStyles } from "./styles";
import { useState, useEffect } from "react";
import api from "../../services/api";

interface DataItem {
  id: number;
  tipo: string;
  valor: number;
  dataTransferencia: string;
  nomeOperadorTransacao: string;
}

interface TableCellProps {
  isNumeric?: boolean;
  children?: React.ReactNode;
}

function TableCell({ isNumeric, children }: TableCellProps) {
  const cellStyles = {
    border: "1px solid black",
    ...tableStyles.solidBorder,
  };

  return (
    <Td style={cellStyles} isNumeric={isNumeric}>
      {children}
    </Td>
  );
}

export function DataTable() {
  const [data, setData] = useState<DataItem[]>([]);
  const [dataInicio, setDataInicio] = useState("");
  const [dataFim, setDataFim] = useState("");
  const [nomeOperador, setNomeOperador] = useState("");
  const [saldoTotal, setSaldoTotal] = useState<number>(0);
  const [saldoPeriodo, setSaldoPeriodo] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 5;

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    api
      .get("/transferencias/")
      .then((response) => setData(response.data as DataItem[]))
      .catch((err) => {
        console.error("Ops! Ocorreu um erro:", err);
      });
  };

  const calcularSaldos = () => {
    const total = data.reduce((acc, item) => acc + item.valor, 0);
    setSaldoTotal(total);

    const filteredData = data.filter((item) => {
      const dataTransferencia = new Date(item.dataTransferencia);
      if (dataInicio && dataTransferencia < new Date(dataInicio)) {
        return false;
      }
      if (dataFim && dataTransferencia > new Date(dataFim)) {
        return false;
      }
      if (nomeOperador && item.nomeOperadorTransacao !== nomeOperador) {
        return false;
      }
      return true;
    });
    const totalPeriodo = filteredData.reduce((acc, item) => acc + item.valor, 0);
    setSaldoPeriodo(totalPeriodo);
  };

  const handlePesquisar = () => {
    const filteredData = data.filter((item) => {
      const dataTransferencia = new Date(item.dataTransferencia);
      if (dataInicio && dataTransferencia < new Date(dataInicio)) {
        return false;
      }
      if (dataFim && dataTransferencia > new Date(dataFim)) {
        return false;
      }
      if (nomeOperador && item.nomeOperadorTransacao !== nomeOperador) {
        return false;
      }
      return true;
    });
    setData(filteredData);

    calcularSaldos();
  };

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleFirstPage = () => {
    setCurrentPage(1);
  };

  const handleLastPage = () => {
    setCurrentPage(totalPages);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(data.length / itemsPerPage);

  return (
    <>
      <Stack flexDirection="row" padding="2%" justifyContent="space-between">
        <Box style={containerStyles}>
          <Text style={labelStyles}>Data de Início</Text>
          <Input
            style={inputStyles}
            size="md"
            type="date"
            value={dataInicio}
            onChange={(e) => setDataInicio(e.target.value)}
          />
        </Box>
        <Box style={containerStyles}>
          <Text style={labelStyles}>Data de Fim</Text>
          <Input
            style={inputStyles}
            size="md"
            type="date"
            value={dataFim}
            onChange={(e) => setDataFim(e.target.value)}
          />
        </Box>
        <Box style={containerStyles}>
          <Text style={labelStyles}>Nome do operador transacionado</Text>
          <Input
            style={inputStyles}
            _placeholder={{ color: "inherit" }}
            size="md"
            value={nomeOperador}
            onChange={(e) => setNomeOperador(e.target.value)}
          />
        </Box>
      </Stack>
      <Stack padding="2%" flexDirection={'row-reverse'} >
        <Button
          bg={'none'}
          onClick={handlePesquisar}
          border={'1px solid black'}
          borderRadius={'0'}
          maxW={'10%'}
        >Pesquisar</Button>
      </Stack>

      <TableContainer overflowX="auto" padding="2%">
        <Table variant="simple" width="100%">
          <Thead>
            <Tr border="solid 1px #000">
              <Th borderBottom="solid 1px #000" textColor="#000">
                Saldo Total: R$ {saldoTotal.toFixed(2)}
              </Th>
              <Th borderBottom="solid 1px #000" textColor="#000">
                Saldo no período: R$ {saldoPeriodo.toFixed(2)}
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
            {currentItems.map((item) => (
              <Tr key={item.id}>
                <TableCell>
                  {new Date(item.dataTransferencia).toLocaleDateString(
                    "pt-BR"
                  )}
                </TableCell>
                <TableCell isNumeric>R$ {item.valor.toFixed(2)}</TableCell>
                <TableCell>{item.tipo}</TableCell>
                <TableCell>{item.nomeOperadorTransacao}</TableCell>
              </Tr>
            ))}
          </Tbody>
          <Tfoot border="1px solid black" >
              {data.length > itemsPerPage && (
                <Stack flexDirection="row" padding="3%" marginLeft={'100%'}>
                  <Button
                    bg="none"
                    onClick={handleFirstPage}
                    borderRadius="0"
                    disabled={currentPage === 1}
                  >
                    {"<<"}
                  </Button>
                  <Button
                    bg="none"
                    onClick={handlePrevPage}
                    borderRadius="0"
                    disabled={currentPage === 1}
                  >
                    {"<"}
                  </Button>
                  {Array.from({ length: totalPages }, (_, index) => index + 1).map((pageNumber) => (
                    <Button
                      key={pageNumber}
                      bg={pageNumber === currentPage ? "gray.300" : "none"}
                      onClick={() => handlePageChange(pageNumber)}
                      borderRadius="0"
                      disabled={pageNumber === currentPage}
                    >
                      {pageNumber}
                    </Button>
                  ))}
                  <Button
                    bg="none"
                    onClick={handleNextPage}
                    borderRadius="0"
                    disabled={currentPage === totalPages}
                  >
                    {">"}
                  </Button>
                  <Button
                    bg="none"
                    onClick={handleLastPage}
                    borderRadius="0"
                    disabled={currentPage === totalPages}
                  >
                    {">>"}
                  </Button>
                </Stack>
              )}
          </Tfoot>
        </Table>
      </TableContainer>
    </>
  );
}
