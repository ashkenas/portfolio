import { Link, Outlet } from 'react-router-dom';
import '../styles/NavBar.scss';

export default function NavBar() {
  return (<>
    <nav class="navbar">
      <Link to='/'>Home</Link>
      <Link to='/work'>Work Experience</Link>
      <Link to='/projects'>Projects</Link>
    </nav>
    <Outlet />
  </>);
};
