import '../styles/Titles.scss';

export default function Title({ children, level = 1 }) {
  const TagName = `h${level}`;
  return (<TagName className="title">{children}</TagName>);
};
