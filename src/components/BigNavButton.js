import '../styles/BigNavButton.scss';
import AnimatedLink from './AnimatedLink';

export default function BigNavButton({ children, seq = 0, to }) {
  return (
    <AnimatedLink to={to} className="big-nav-btn" style={{ animationDelay: `${seq * .25}s` }}>
      {children}
    </AnimatedLink>
  );
};
