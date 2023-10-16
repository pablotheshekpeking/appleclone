'use client'

import { Stack, Box, Heading, Text, Img } from "@chakra-ui/react";

const Section2 = () => {
    return (
        <Stack
            width={'100%'}
            m={'auto'}
            minH={['70vh', '70vh', '80vh', '80vh']}
            backgroundImage={'/15.avif'}
            backgroundSize={'cover'}
            backgroundPosition={'center center'}
        >
            <Box className="heroContent" textAlign={'center'} pt={'50px'}>
                <Heading>iPhone 15 </Heading>
                <Text>New camera. New design. Newphoria.</Text>
                <Stack direction={'row'} color={'#2A97FB'} justify={'center'}>
                    <Text cursor={'pointer'} _hover={{ textDecoration: 'underline',}}>Learn More </Text>
                    <Text cursor={'pointer'} _hover={{ textDecoration: 'underline',}}>Buy</Text>
                </Stack>
            </Box>
        </Stack>
    );
}

export default Section2;