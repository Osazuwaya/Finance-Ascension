import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider } from '@chakra-ui/react'
import { system } from "@chakra-ui/react/preset";

import App from './App'


ReactDOM.createRoot(document.getElementById('root')).render(
  
  <React.StrictMode>
    <ChakraProvider value={system}>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
)