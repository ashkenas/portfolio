import '../styles/FlyIn.scss';

export default function FlyIn({ text, seq }) {
  const spacing = .5 / text.length;
  const offset = .5 * seq;
  const words = [];
  let i = 0;
  for(const segment of text.split(' ')) {
    const [word, className = ''] = segment.split('|');
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
    if (words.length && !(/^\W$/).test(word))
      words.push(<span className='inline-block' key={i++}>&nbsp;</span>);
    words.push(
      <span className={`inline-block ${className}`} key={i}>
        {letters}
      </span>
    );
  }
  return words;
};
