'use client'

import { Stack, Box, Heading, Text, Img } from "@chakra-ui/react";

const Section2 = () => {
    return (
        <Stack
            width={'100%'}
            m={'auto'}
            minH={['50vh', '50vh', '80vh', '80vh']}
            backgroundImage={'/15.avif'}
            backgroundSize={'cover'}
            backgroundPosition={'center center'}
            mb={'10px'}
        >
            <Box className="heroContent" textAlign={'center'} pt={'50px'}>
                <Heading fontSize={'30px'}>iPhone 15 </Heading>
                <Text fontSize={['', '', '25px', '25px']}>New camera. New design. Newphoria.</Text>
                <Stack direction={'row'} color={'#2A97FB'} justify={'center'} fontSize={['',  '', '20px', '20px']}>
                    <Text cursor={'pointer'} _hover={{ textDecoration: 'underline', }}>Learn More </Text>
                    <Text cursor={'pointer'} _hover={{ textDecoration: 'underline', }}>Buy</Text>
                </Stack>
            </Box>
        </Stack>
    );
}

export default Section2;