import '../styles/FlyIn.scss';

export default function FlyIn({ text, seq }) {
  const spacing = .5 / text.length;
  const offset = .5 * seq;
  const words = [];
  let accented = false;
  let i = 0;
  for(const word of text.split(' ')) {
    const letters = [];
    for(const c of word) {
      if (c === '|') {
        accented = !accented;
        continue;
      }
      const delay = (spacing * i) + offset;
      const classes = `flyin${accented ? ' has-white' : ''}`;
      letters.push(
        <span className={classes} key={i} style={{ animationDelay: `${delay}s` }}>
          {c}
        </span>
      );
      i++;
    }
    if (words.length)
      words.push(<span className='inline-block' key={i++}>&nbsp;</span>);
    words.push(
      <span className={`inline-block`} key={i}>
        {letters}
      </span>
    );
  }
  return words;
};
