import { lazy } from 'react'
import { createBrowserRouter, Navigate } from 'react-router-dom'

import { EAppRouterPath } from '@app/router/paths'
import { SuspenseLoadComponent } from '@shared/load-component'

const AppLayout = lazy(async () => import('@app/router/layout'))

const RequestsPage = lazy(async () => import('@pages/requests'))

const NotFoundPage = lazy(async () => import('@pages/404'))

const AppRouter = createBrowserRouter([
  {
    path: EAppRouterPath.NOT_FOUND,
    element: SuspenseLoadComponent({ Component: NotFoundPage }),
  },
  {
    element: <AppLayout/>,
    children: [
      {
        path: EAppRouterPath.ANY_PATH,
        element: <Navigate to={ EAppRouterPath.NOT_FOUND } />,
      },
      {
        path: EAppRouterPath.DEFAULT,
        element: <RequestsPage/>
      }
    ],
  },
])

export default AppRouter
