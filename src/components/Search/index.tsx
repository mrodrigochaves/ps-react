import { Input, Stack } from "@chakra-ui/react"

export function Search() {
    return (

        <Stack padding="3%" flexDirection={'row-reverse'} >
            <Input
                borderColor={'none'}
                borderRadius={'0'}
                maxW={'10%'}
                placeholder='pesquisar'
                _placeholder={{ color: 'inherit' }}
                size='md' />
        </Stack>

    );
}