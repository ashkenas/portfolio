import '../styles/Container.scss';

export default function Container({ children, seq = 0 }) {
  return (
    <div className="container" style={{ animationDelay: `${seq * .25}s` }}>
      {children}
    </div>
  );
};
