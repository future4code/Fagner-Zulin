import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import React from 'react';
import palette from './constants/paletteColors';
import Router from './routers/Router';

const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: palette.white,
      },
    },
  },
});

export default function App() {
  return (
    <ChakraProvider theme={theme}>
      <Router />
    </ChakraProvider>
  );
}
