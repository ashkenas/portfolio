import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import '../styles/App.scss';
import Home from './Home';
import NavBar from './NavBar';

const router = createBrowserRouter([
  {
    path: "/",
    element: <NavBar />,
    children: [
      {
        index: true,
        element: <Home />
      }
    ]
  }
]);

export default function App() {
  return (<>
    <RouterProvider router={router} />
  </>);
};
