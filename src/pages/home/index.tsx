
import { ChakraProvider, Container } from "@chakra-ui/react";
import { DataTable } from "../../components/DataTable";

export default function Home() {
  return (
    <ChakraProvider >
      <Container maxW='85%'>
      <DataTable />
      </Container>
    </ChakraProvider>
  );
}
