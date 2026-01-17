import { lazy } from 'react';

const Inicio = lazy(() => import('../pages/Inicio'));

const routes = [
  {
    path: '/',
    element: <Inicio />,
    name: 'Inicio',
  },
];

export default routes;
