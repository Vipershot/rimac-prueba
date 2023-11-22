import { createBrowserRouter } from 'react-router-dom'
import { Home, Plan, Thanks } from './components/organism/index'
import { Layout } from './components/layout'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/arma-tu-plan',
        element: <Plan/>,
      },
      {
        path: '/gracias',
        element: <Thanks/>,
      },
    ],
  },
])
