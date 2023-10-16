'use client'

import { Stack, Box, Heading, Text, Img } from "@chakra-ui/react";

const Hero = () => {
    return (
        <Stack
            width={'100%'}
            m={'auto'}
            minH={['60vh', '60vh', '80vh', '80vh']}
            color={'white'}
            backgroundImage={'/15pro.png'}
            backgroundSize={'cover'}
            backgroundPosition={'center center'}
        >
            <Box className="heroContent" textAlign={'center'}>
                <Heading>iPhone 15 Pro</Heading>
                <Text>Titanium. So strong. So light. So pro.</Text>
                <Stack direction={'row'} color={'blue'} justify={'center'}>
                    <Text>Learn More </Text>
                    <Text>Buy</Text>
                </Stack>
            </Box>
        </Stack>
    );
}

export default Hero;