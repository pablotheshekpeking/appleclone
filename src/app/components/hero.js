'use client'

import { Stack, Box, Heading, Text, Img } from "@chakra-ui/react";

const Hero = () => {
    return (
        <Stack
            width={'100%'}
            m={'auto'}
            minH={['70vh', '70vh', '80vh', '80vh']}
            color={'white'}
            backgroundImage={'/15pro.png'}
            backgroundSize={'cover'}
            backgroundPosition={'center center'}
        >
            <Box className="heroContent" textAlign={'center'} pt={'50px'}>
                <Heading>iPhone 15 Pro</Heading>
                <Text>Titanium. So strong. So light. So pro.</Text>
                <Stack direction={'row'} color={'#2A97FB'} justify={'center'}>
                    <Text cursor={'pointer'} _hover={{ textDecoration: 'underline',}}>Learn More </Text>
                    <Text cursor={'pointer'} _hover={{ textDecoration: 'underline',}}>Buy</Text>
                </Stack>
            </Box>
        </Stack>
    );
}

export default Hero;