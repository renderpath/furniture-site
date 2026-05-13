import { createBrowserRouter } from 'react-router-dom';

import { HomePage } from '../../pages/home-page';
import { AdminPage } from '../../pages/admin-page';
import { AdminLoginPage } from '../../pages/admin-login-page';
import { CatalogPage } from '../../pages/catalog-page';
import { CatalogItemPage } from '../../pages/catalog-item-page';

export const router = createBrowserRouter(
    [
        {
            path: '/',
            element: <HomePage />,
        },
        {
            path: '/catalog',
            element: <CatalogPage />,
        },
        {
            path: '/catalog/:id',
            element: <CatalogItemPage />,
        },
        {
            path: '/admin',
            element: <AdminPage />,
        },
        {
            path: '/admin/login',
            element: <AdminLoginPage />,
        },
    ],
    {
        basename: '/furniture-site',
    }
);