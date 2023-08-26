import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import '../styles/App.scss';
import Home from './Home';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  }
]);

export default function App() {
  return (<>
    <RouterProvider router={router} />
  </>);
};
