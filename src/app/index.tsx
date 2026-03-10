import { RouterProvider } from 'react-router-dom'
import AppRouter from '@app/router/routes'
import type { ReactNode } from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import { styleSystem } from './theme'
import './global.css'
import '@shared/i18n'



const App = (): ReactNode => {
  return <ChakraProvider value={styleSystem}>
    <RouterProvider router={ AppRouter } />
  </ChakraProvider>
}

export default App
