'use client'

import { Stack, Box, Img, Heading, Text } from "@chakra-ui/react";
import React from "react";
const Row1 = () => {
    return (
        <Stack
            direction={['column', 'column', 'row', 'row']}
            m={'10px auto'}
            w={'100%'}
        >
            <Box w={['100%', '100%', '50%', '50%']} m={'10px'}>
                <>
                    <Box className="heroContent" textAlign={'center'} pt={'70px'} bg={'#FAFAFA'}>
                        <Heading fontSize={'30px'}>iPad</Heading>
                        <Text fontSize={['', '', '25px', '25px']}>Lovable. Drawable. Magical.</Text>
                        <Stack direction={'row'} color={'#2A97FB'} justify={'center'} fontSize={['', '', '20px', '20px']}>
                            <Text cursor={'pointer'} _hover={{ textDecoration: 'underline', }}>Learn More </Text>
                            <Text cursor={'pointer'} _hover={{ textDecoration: 'underline', }}>Buy</Text>
                        </Stack>
                    </Box>
                    <Img src="/ipad.jpg" w={'100%'} h={'auto'} mb={'10px'} />
                </>
            </Box>

            <Box w={['100%', '100%', '50%', '50%']} m={'10px'}>
                <Stack
                minH={'66vh'}
                    backgroundImage={'/visionpro.png'}
                    backgroundSize={'cover'}
                    backgroundPosition={'center center'}
                >
                    <Box className="heroContent" textAlign={'center'} pt={'370px'}>
                        <Heading fontSize={'30px'}>Vision Pro</Heading>
                        <Text fontSize={['', '', '25px', '25px']}>Welcome to the era of spacial computing</Text>
                        <Text color={'#dddddd'}>Availabe early next year in the U.S</Text>
                        <Stack direction={'row'} color={'#2A97FB'} justify={'center'} fontSize={['', '', '20px', '20px']}>
                            <Text cursor={'pointer'} _hover={{ textDecoration: 'underline', }}>Learn More </Text>
                        </Stack>
                    </Box>
                </Stack>
            </Box>
        </Stack>
    );
}

export default Row1;