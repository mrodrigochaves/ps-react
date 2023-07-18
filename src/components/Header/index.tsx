import { Container, Flex, Input, Text } from "@chakra-ui/react"

export function Header() {
    return (
        <Container paddingTop="100px" paddingBottom="20px">
            <Flex justifyContent="space-between">
                
            <Text mb='8px'>Data de Início: {}</Text>
                <Input 
                    placeholder="Select Date and Time"
                    size="md"
                    type="date"
                />
                <Input
                    placeholder="Select Date and Time"
                    size="md"
                    type="date"
                />
                <Input placeholder='medium size' size='md' />
            </Flex>
        </Container>
    );
}