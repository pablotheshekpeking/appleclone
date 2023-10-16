'use client'

import { Stack, Box, Heading, Text, Img } from "@chakra-ui/react";

const Hero = () => {
    return ( 
        <Stack
        width={'100%'}
        minH={'80vh'}
        backgroundImage={'/15pro.png'}
        backgroundSize={'cover'}
        backgroundPosition={'center center'}
        >
            <Heading>iPhone 15 Pro</Heading>
            <Text>Titanium. So strong. So light. So pro.</Text>
            <Stack color={'blue'}>
                <Text>Learn More </Text>
                <Text>Buy</Text>
            </Stack>
        </Stack>
     );
}
 
export default Hero;