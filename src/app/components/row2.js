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
                <>
                    <Box className="heroContent" textAlign={'center'} pt={'70px'} bg={'#FAFAFA'}>
                        <Heading fontSize={'30px'}>MacBook Air 15"</Heading>
                        <Text fontSize={['', '', '25px', '25px']}>Impressively big. Impressively thin.</Text>
                        <Stack direction={'row'} color={'#2A97FB'} justify={'center'} fontSize={['', '', '20px', '20px']}>
                            <Text cursor={'pointer'} _hover={{ textDecoration: 'underline', }}>Learn More </Text>
                            <Text cursor={'pointer'} _hover={{ textDecoration: 'underline', }}>Buy</Text>
                        </Stack>
                    </Box>
                    <Img src="/mac.jpg" w={'100%'} h={'500px'} mb={'10px'} />
                </>
            </Box>

            <Box w={['100%', '100%', '50%', '50%']} m={'10px'}>
                <>
                    <Box className="heroContent" textAlign={'center'} pt={'70px'} bg={'black'} color={'white'}>
                    <Heading fontSize={'30px'}>AirPods Pro</Heading>
                        <Text fontSize={['', '', '25px', '25px']}>Adaptive audio. Now playing.</Text>
                        <Stack direction={'row'} color={'#2A97FB'} justify={'center'} fontSize={['', '', '20px', '20px']}>
                            <Text cursor={'pointer'} _hover={{ textDecoration: 'underline', }}>Learn More </Text>
                            <Text cursor={'pointer'} _hover={{ textDecoration: 'underline', }}>Buy</Text>
                        </Stack>
                    </Box>
                    <Img src="/airpods.jpeg" w={'100%'} h={'auto'} mb={'10px'} />
                </>
            </Box>
        </Stack>
    );
}

export default Row2;