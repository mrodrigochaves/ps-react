import { Input, Stack, Text } from "@chakra-ui/react"

export function Header() {
    return (

        <Stack direction={"row"} spacing={3} padding={'2%'}>
            <Text marginLeft={'5%'}>Data de Inicio</Text>
            <Input
                borderColor={'none'}
                placeholder="Select Date and Time"
                size="md"
                type="date"
            />
            <Text marginLeft={'5%'}>Data de Fim</Text>
            <Input
                borderColor={'none'}
                marginLeft={'5%'}
                placeholder="Select Date and Time"
                size="md"
                type="date"
            />
            <Text marginLeft={'5%'}>Nome do operador transacionado de Inicio</Text>
            <Input
                borderColor={'none'}
                marginLeft={'5%'}
                placeholder='medium size'
                _placeholder={{ color: 'inherit' }}
                size='md' />
        </Stack>

    );
}