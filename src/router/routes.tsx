import { RouteObject } from "react-router-dom";
import React from 'react';

const IndexApp = React.lazy(() => import('../pages/IndexApp'));
const TestApp = React.lazy(() => import('../pages/TestApp'));

const router = [
  {
    path: '/',
    element: <IndexApp />,
  },
  {
    path: '/TestApp',
    element: <TestApp />,
  },
] as Array<RouteObject>;

export default router;
