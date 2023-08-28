import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import '../styles/App.scss';
import E404 from './404';
import Home from './Home';
import MainLayout from './MainLayout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: '*',
        element: <E404 />
      }
    ]
  }
]);

export default function App() {
  return (<>
    <RouterProvider router={router} />
  </>);
};
