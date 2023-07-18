import { Input, Stack, Text, Box } from "@chakra-ui/react";
import { inputStyles, containerStyles, labelStyles } from "./styles";

export function Header() {
  return (
    <Stack flexDirection={'row'} padding="3%" justifyContent={'space-between'}>
      <Box  style={containerStyles}>
        <Text style={labelStyles}>Data de Inicio</Text>
        <Input style={inputStyles} size="md" type="date" />
      </Box>
      <Box  style={containerStyles}>
        <Text style={labelStyles}>Data de Fim</Text>
        <Input
          style={inputStyles}
          size="md"
          type="date"
        />
      </Box>
      <Box  style={containerStyles}>
        <Text style={labelStyles}>Nome do operador transacionado</Text>
        <Input
          style={inputStyles}
          _placeholder={{ color: 'inherit' }}
          size="md"
        />
      </Box>
    </Stack>
  );
}
