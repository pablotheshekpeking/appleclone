'use client'

import { Stack, Box, Img, Heading, Text } from "@chakra-ui/react";
import React from "react";
const Row3 = () => {
    return (
        <Stack
            direction={['column', 'column', 'row', 'row']}
            w={'100%'}
        >

            <Box w={['100%', '100%', '50%', '50%']} m={['', '', '10px', '10px']}>
                <>
                    <Box className="heroContent" textAlign={'center'} pt={'70px'} bg={'white'}>
                        <Heading fontSize={'30px'}>Trade In</Heading>
                        <Text fontSize={['', '', '25px', '25px']}>Get $200-$650 in store credit when you trade in iPhone 11 or higher.</Text>
                        <Stack direction={'row'} color={'#2A97FB'} justify={'center'} fontSize={['', '', '20px', '20px']}>
                            <Text cursor={'pointer'} _hover={{ textDecoration: 'underline', }}>See what your device is worth </Text>
                        </Stack>
                    </Box>
                    <Img src="/trade.jpeg" w={'100%'} h={'auto'} mb={'10px'} />
                </>
            </Box>

            <Box w={['100%', '100%', '50%', '50%']} m={['', '', '10px', '10px']}>
                <>
                    <Box className="heroContent" textAlign={'center'} pt={'70px'} bg={'#fafafa'} color={'black'}>
                    <Heading fontSize={'30px'}>Card</Heading>
                        <Text fontSize={['', '', '25px', '25px']}>Get up to 3% cash back with every purchase</Text>
                        <Stack direction={'row'} color={'#2A97FB'} justify={'center'} fontSize={['', '', '20px', '20px']}>
                            <Text cursor={'pointer'} _hover={{ textDecoration: 'underline', }}>Learn More </Text>
                            <Text cursor={'pointer'} _hover={{ textDecoration: 'underline', }}>Apply Now</Text>
                        </Stack>
                    </Box>
                    <Img src="/card.webp" w={'100%'} h={'auto'} mb={'10px'} />
                </>
            </Box>
        </Stack>
    );
}

export default Row3;