import '../styles/ExternalLink.scss';

export default function ExternalLink({ to, children }) {
  return (
    <a className="external-link" href={to} target="_blank" rel="noreferrer">
      {children}
    </a>
  );
};
