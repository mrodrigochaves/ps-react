import { Input, Stack } from "@chakra-ui/react"

export function Search() {
    return (

        <Stack marginTop={'3%'} padding={'2%'} flexDirection={'row-reverse'} >
            <Input
                borderColor={'none'}
                maxW={'15%'}
                placeholder='pesquisar'
                _placeholder={{ color: 'inherit' }}
                size='md' />
        </Stack>

    );
}