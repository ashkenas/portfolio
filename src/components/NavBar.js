import '../styles/NavBar.scss';
import AnimatedLink from './AnimatedLink';

export default function NavBar() {
  return (<>
    <nav className="navbar">
      <AnimatedLink to='/'>Home</AnimatedLink>
      <AnimatedLink to='/work'>Work</AnimatedLink>
      <AnimatedLink to='/projects'>Projects</AnimatedLink>
    </nav>
  </>);
};
