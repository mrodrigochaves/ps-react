
import { ChakraProvider } from "@chakra-ui/react";
import { DataTable } from "../../components/DataTable";
import { Header } from "../../components/Header";
export default function Home() {
  return (
    <ChakraProvider>
      <Header />
      <DataTable />
    </ChakraProvider>
  );
}
