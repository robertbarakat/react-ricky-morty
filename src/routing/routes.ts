import { lazy } from 'react';

const Home = lazy(() => import('../pages/Home'));
const NotFound = lazy(() => import('../pages/NotFound'));

/**
 * Elenco routes
 * @summary Le routes vengono definite in un array di oggetti, filtrabili a seconda delle esigenze
 */

export const routes = [
    {
        title: 'Home',
        path: '/',
        element: Home,
    },
    {
        title: 'Not Found',
        path: '/404',
        element: NotFound,
    },
];
