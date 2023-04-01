import { Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { routes } from './routes';

/**
 * Metodi per la generazione di routes
 * @summary Vengono definiti metodi per generare le routes in base a profilo utenti
 */

export const generateAllRoutes = () => {
    return (
        <Suspense fallback={<p>Loading ...</p>}>
            <Routes>
                {routes.map((el) => (
                    <Route key={uuidv4()} path={el.path} element={<el.element />} />
                ))}

                <Route path='*' element={<Navigate to='/404' />} />
            </Routes>
        </Suspense>
    );
};
