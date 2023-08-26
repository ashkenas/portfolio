import '../styles/FlyIn.scss';

export default function FlyIn({ text, seq }) {
  const spacing = .5 / text.length;
  const offset = .5 * seq;
  const words = [];
  let i = 0;
  for(const word of text.split(' ')) {
    const letters = [];
    for(const c of word) {
      const delay = (spacing * i) + offset;
      letters.push(
        <span className="flyin" key={i} style={{ animationDelay: `${delay}s` }}>
          {c}
        </span>
      );
      i++;
    }
    if (words.length)
      words.push(<span className='inline-block' key={i++}>&nbsp;</span>);
    words.push(<span className='inline-block' key={i}>{letters}</span>);
  }
  return words;
};
