'use client'

import { Stack, Box, Img, Heading, Text } from "@chakra-ui/react";
import React from "react";
const Row2 = () => {
    return (
        <Stack
            direction={['column', 'column', 'row', 'row']}
            w={'100%'}
        >
            <Box w={['100%', '100%', '50%', '50%']} m={'10px'}>
                <Stack
                    minH={'66vh'}
                    backgroundImage={'/mac.jpg'}
                    backgroundSize={'cover'}
                    backgroundPosition={'center center'}
                >
                    <Box className="heroContent" textAlign={'center'} pt={'70px'}>
                        <Heading fontSize={'30px'}>MacBook Air 15"</Heading>
                        <Text fontSize={['', '', '25px', '25px']}>Impressively big. Impressively thin.</Text>
                        <Stack direction={'row'} color={'#2A97FB'} justify={'center'} fontSize={['', '', '20px', '20px']}>
                            <Text cursor={'pointer'} _hover={{ textDecoration: 'underline', }}>Learn More </Text>
                            <Text cursor={'pointer'} _hover={{ textDecoration: 'underline', }}>Buy</Text>
                        </Stack>
                    </Box>
                </Stack>
            </Box>

            <Box w={['100%', '100%', '50%', '50%']} m={'10px'}>
                <Stack
                    minH={'66vh'}
                    backgroundImage={'/airpods.jpeg'}
                    backgroundSize={'cover'}
                    backgroundPosition={'center center'}
                >
                    <Box className="heroContent" textAlign={'center'} pt={'70px'}>
                        <Heading fontSize={'30px'}>AirPods Pro</Heading>
                        <Text fontSize={['', '', '25px', '25px']}>Adaptive audio. Now playing.</Text>
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

export default Row2;