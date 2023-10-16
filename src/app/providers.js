'use client';

import { CacheProvider } from '@chakra-ui/next-js';
import { ChakraProvider } from '@chakra-ui/react';
import Navbar from './components/navabr';
import Section1 from './components/15pro';
import Section2 from './components/15';

export function Providers({ children }) {
  return (
    <CacheProvider>
      <ChakraProvider>
        <Navbar />

        <Section1 />

        <Section2 />
      </ChakraProvider>
    </CacheProvider>
  );
}
