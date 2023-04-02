import { lazy } from 'react';

const Home = lazy(() => import('../pages/Home'));
const Character = lazy(() => import('../pages/Character'));
const NotFound = lazy(() => import('../pages/NotFound'));

/**
 * List of application's routes
 * @summary The routes are defined in an array of objects that can be customized according to the project's needs
 */

export const routes = [
    {
        title: 'Home',
        path: '/',
        element: Home,
    },
    {
        title: 'Character',
        path: '/character',
        element: Character
    },
    {
        title: 'Not Found',
        path: '/404',
        element: NotFound,
    },
];
