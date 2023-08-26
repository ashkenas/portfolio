import '../styles/Container.scss';

export default function Container({ children }) {
  return (
    <div class="container">
      {children}
    </div>
  );
};
