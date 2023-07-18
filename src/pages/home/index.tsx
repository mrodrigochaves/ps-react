
import { ChakraProvider, Container } from "@chakra-ui/react";
import { DataTable } from "../../components/DataTable";
import { Header } from "../../components/Header";
import { Search } from "../../components/Search";
export default function Home() {
  return (
    <ChakraProvider >
      <Container maxW='85%'>
      <Header />
      <Search />
      <DataTable />
      </Container>
    </ChakraProvider>
  );
}
