import { lazy } from 'react'
import { createBrowserRouter, Navigate } from 'react-router-dom'

import { AppRouterPath } from '@app/router/paths'
import { SuspenseLoadComponent } from '@shared/load-component'

const AppLayout = lazy(async () => import('@app/router/layout'))

const RequestsPage = lazy(async () => import('@pages/requests'))

const NotFoundPage = lazy(async () => import('@pages/404'))

const AppRouter = createBrowserRouter([
  {
    path: AppRouterPath.NOT_FOUND,
    element: SuspenseLoadComponent({ Component: NotFoundPage }),
  },
  {
    element: <AppLayout/>,
    children: [
      {
        path: AppRouterPath.ANY_PATH,
        element: <Navigate to={ AppRouterPath.NOT_FOUND } />,
      },
      {
        path: AppRouterPath.DEFAULT,
        element: <RequestsPage/>
      }
    ],
  },
])

export default AppRouter
