'use client'

import { Stack, Box, Heading, Text, Img } from "@chakra-ui/react";

const Section1 = () => {
    return (
        <Stack
            width={'100%'}
            m={'auto'}
            minH={['50vh', '50vh', '80vh', '80vh']}
            color={'white'}
            backgroundImage={'/15pro.png'}
            backgroundSize={'cover'}
            backgroundPosition={'center center'}
            mb={'10px'}
        >
            <Box className="heroContent" textAlign={'center'} pt={'70px'}>
                <Heading fontSize={'30px'}>iPhone 15 Pro</Heading>
                <Text fontSize={['', '', '25px', '25px']}>Titanium. So strong. So light. So pro.</Text>
                <Stack direction={'row'} color={'#2A97FB'} justify={'center'} fontSize={'20px'}>
                    <Text cursor={'pointer'} _hover={{ textDecoration: 'underline', }}>Learn More </Text>
                    <Text cursor={'pointer'} _hover={{ textDecoration: 'underline', }}>Buy</Text>
                </Stack>
            </Box>
        </Stack>
    );
}

export default Section1;