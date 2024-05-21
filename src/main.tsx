import { ChakraProvider } from '@chakra-ui/react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import ErrorView from './pages/error/ErrorView';
import FavoriteView from './pages/favorite/FavoriteView';
import DetailView from './pages/detail/DetailView';
import AboutView from './pages/about/AboutView';
import GlobalState from './context/GlobalState';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <ErrorView />
    },
    {
        path: '/favoriteview',
        element: <FavoriteView />,
        errorElement: <ErrorView />
    },
    {
        path: '/detailview/:id',
        element: <DetailView />,
        errorElement: <ErrorView />
    },
    {
        path: '/about',
        element: <AboutView />,
        errorElement: <ErrorView />
    }
])
export default router;

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <ChakraProvider>
            <GlobalState>
                <RouterProvider router={router} />
            </GlobalState>
        </ChakraProvider>
    </React.StrictMode>,
)
