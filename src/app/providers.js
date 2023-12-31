'use client';

import { CacheProvider } from '@chakra-ui/next-js';
import { ChakraProvider } from '@chakra-ui/react';
import Navbar from './components/navabr';
import Section1 from './components/15pro';
import Section2 from './components/15';
import Watchs9 from './components/watchs9';
import Row1 from './components/row1';
import Row2 from './components/row2';
import Row3 from './components/row3';

export function Providers({ children }) {
  return (
    <CacheProvider>
      <ChakraProvider>
        <Navbar />

        <Section1 />

        <Section2 />

        <Watchs9 />

        <Row1 />

        <Row2 />

        <Row3 />
      </ChakraProvider>
    </CacheProvider>
  );
}
