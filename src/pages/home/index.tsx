
import { ChakraProvider, Container } from "@chakra-ui/react";
import { DataTable } from "../../components/DataTable";
import { Header } from "../../components/Header";
import { Search } from "../../components/Search";
export default function Home() {
  return (
    <ChakraProvider >
      <Container marginTop={'5%'} maxW='85%' bg='green.400' >
      <Header />
      <Search />
      <DataTable />
      </Container>
    </ChakraProvider>
  );
}
