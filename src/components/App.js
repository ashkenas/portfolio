import { createBrowserRouter, defer, RouterProvider } from 'react-router-dom';
import '../styles/App.scss';
import E404 from './404';
import Home from './Home';
import MainLayout from './MainLayout';
import Projects from './Projects';
import Work from './Work';

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
        path: 'work',
        element: <Work />,
        loader: ({ request }) => {
          return defer({
            data: fetch('/work.json', {
              signal: request.signal
            }).then(res => res.json())
          });
        }
      },
      {
        path: 'projects',
        element: <Projects />,
        loader: ({ request }) => {
          return defer({
            data: fetch('/projects.json', {
              signal: request.signal
            }).then(res => res.json())
          });
        }
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
