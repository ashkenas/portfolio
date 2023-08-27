import '../styles/Hero.scss';

export default function Hero({ children, seq = 0 }) {
  return (
    <div className="hero" style={{ animationDelay: `${seq * .25}s` }}>
      {children}
    </div>
  );
};
