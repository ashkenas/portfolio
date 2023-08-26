import '../styles/FlyIn.scss';

export default function FlyIn({ text, seq }) {
  const spacing = .5 / text.length;
  return [...text].map((c, i) => {
    const delay = (spacing * i) + (.5 * seq);
    return (<span class="flyin" key={i} style={{ animationDelay: `${delay}s` }}>
      {c === ' ' ? '\u00A0' : c}
    </span>);
  });
};
