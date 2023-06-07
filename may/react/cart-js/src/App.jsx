import Posts from '@/components/Posts';
import Navigation from '@/pages/Navigation';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from '@/pages/RootLayout';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      errorElement: 'Not Found!',
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
