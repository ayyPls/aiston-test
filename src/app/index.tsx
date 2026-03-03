import { RouterProvider } from 'react-router-dom'

import AppRouter from '@app/router/routes'

import './global.css'

import type { ReactNode } from 'react'

const App = (): ReactNode => {
  return <RouterProvider router={ AppRouter } />
}

export default App
