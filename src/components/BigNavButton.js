import { Link } from 'react-router-dom';
import '../styles/BigNavButton.scss';

export default function BigNavButton({ children, seq = 0, to }) {
  return (
    <Link to={to} className="big-nav-btn" style={{ animationDelay: `${seq * .25}s` }}>
      {children}
    </Link>
  );
};
