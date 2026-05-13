import { createBrowserRouter } from 'react-router-dom';

import { HomePage } from '../../pages/home-page';
import { AdminPage } from '../../pages/admin-page';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <HomePage />,
    },

    {
        path: '/admin',
        element: <AdminPage />,
    },
]);