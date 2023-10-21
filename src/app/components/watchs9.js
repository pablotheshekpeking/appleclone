'use client'

import { Stack, Box, Heading, Text, Img } from "@chakra-ui/react";

const Watchs9 = () => {
    return (
        

        <>
        <Box className="heroContent" textAlign={'center'} pt={'50px'} w={'100%'} bg={'black'} olor={'white'}>
            <Heading fontSize={'30px'}>WATCH</Heading><Text fontSize={'15px'} color={'#D23D29'}>SERIES 9</Text>
            <Text fontSize={['', '', '25px', '25px']}>Smarter. Brighter. Mightier.</Text>
            <Stack direction={'row'} color={'#2A97FB'} justify={'center'} fontSize={['', '', '20px', '20px']}>
                <Text cursor={'pointer'} _hover={{ textDecoration: 'underline', }}>Learn More </Text>
                <Text cursor={'pointer'} _hover={{ textDecoration: 'underline', }}>Buy</Text>
            </Stack>
        </Box>
        <Img src="/series9.webp" w={'100%'} h={['50vh', '50vh', '80vh', '80vh']} />
        </>
    );
}

export default Watchs9;

{/** 
        <Stack
            width={'100%'}
            m={'auto'}
            minH={['50vh', '50vh', '80vh', '80vh']}
            color={'white'}
            backgroundImage={'/series9.webp'}
            backgroundSize={'cover'}
            backgroundPosition={'center center'}
            mb={'10px'}
        >
            <Box className="heroContent" textAlign={'center'} pt={'50px'}>
                <Heading fontSize={'30px'}>WATCH</Heading>
                <Text fontSize={'15px'} color={'#D23D29'}>SERIES 9</Text>
                <Text fontSize={['', '', '25px', '25px']}>Smarter. Brighter. Mightier.</Text>
                <Stack direction={'row'} color={'#2A97FB'} justify={'center'} fontSize={['',  '', '20px', '20px']}>
                    <Text cursor={'pointer'} _hover={{ textDecoration: 'underline',}}>Learn More </Text>
                    <Text cursor={'pointer'} _hover={{ textDecoration: 'underline',}}>Buy</Text>
                </Stack>
            </Box>
        </Stack>
        */}