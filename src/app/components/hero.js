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
        ></Stack>
     );
}
 
export default Hero;