import Posts from '@/components/Posts';
import Navigation from '@/pages/Navigation';
import ErrorElement from '@/pages/ErrorElement';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from '@/pages/RootLayout';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      errorElement: <ErrorElement />,
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <Navigation />,
        },
        {
          path: '/post',
          element: <Posts />,
        },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
