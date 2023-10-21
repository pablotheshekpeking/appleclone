'use client'

import { Stack, Box, Heading, Text, Img } from "@chakra-ui/react";

const Watchs9 = () => {
    return (
        <Stack
            width={'100%'}
            m={'auto'}
            minH={['70vh', '70vh', '80vh', '80vh']}
            color={'white'}
            backgroundImage={'/series9.webp'}
            backgroundSize={'cover'}
            backgroundPosition={'bottom bottom'}
            mb={'10px'}
        >
            <Box className="heroContent" textAlign={'center'} pt={'70px'}>
                <Heading>WATCH</Heading>
                <Text fontSize={'15px'} color={'#D23D29'}>SERIES 9</Text>
                <Text>Smarter. Brighter. Mightier.</Text>
                <Stack direction={'row'} color={'#2A97FB'} justify={'center'}>
                    <Text cursor={'pointer'} _hover={{ textDecoration: 'underline',}}>Learn More </Text>
                    <Text cursor={'pointer'} _hover={{ textDecoration: 'underline',}}>Buy</Text>
                </Stack>
            </Box>
        </Stack>
    );
}

export default Watchs9;