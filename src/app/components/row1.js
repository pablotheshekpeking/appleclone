'use client'

import { Stack, Box, Img, Heading, Text } from "@chakra-ui/react";
import React from "react";
const Row1 = () => {
    return (
        <Stack
            direction={['column', 'column', 'row', 'row']}
            m={'10px auto'}
        >
            <Box>
                <Stack
                backgroundImage={'series9.webp'}
                backgroundSize={'cover'}
                backgroundPosition={'center center'}
                >
                <Box className="heroContent" textAlign={'center'} pt={'70px'}>
                    <Heading fontSize={'30px'}>iPhone 15 Pro</Heading>
                    <Text fontSize={['', '', '25px', '25px']}>Titanium. So strong. So light. So pro.</Text>
                    <Stack direction={'row'} color={'#2A97FB'} justify={'center'} fontSize={['', '', '20px', '20px']}>
                        <Text cursor={'pointer'} _hover={{ textDecoration: 'underline', }}>Learn More </Text>
                        <Text cursor={'pointer'} _hover={{ textDecoration: 'underline', }}>Buy</Text>
                    </Stack>
                </Box>
                </Stack>
            </Box>
            
            <Box>
                <Stack
                backgroundImage={'series9.webp'}
                backgroundSize={'cover'}
                backgroundPosition={'center center'}
                >
                <Box className="heroContent" textAlign={'center'} pt={'70px'}>
                    <Heading fontSize={'30px'}>iPhone 15 Pro</Heading>
                    <Text fontSize={['', '', '25px', '25px']}>Titanium. So strong. So light. So pro.</Text>
                    <Stack direction={'row'} color={'#2A97FB'} justify={'center'} fontSize={['', '', '20px', '20px']}>
                        <Text cursor={'pointer'} _hover={{ textDecoration: 'underline', }}>Learn More </Text>
                        <Text cursor={'pointer'} _hover={{ textDecoration: 'underline', }}>Buy</Text>
                    </Stack>
                </Box>
                </Stack>
            </Box>
        </Stack>
    );
}

export default Row1;