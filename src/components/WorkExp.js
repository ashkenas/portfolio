import '../styles/WorkExp.scss';
import Container from './Container';
import Horizontal from './Horizontal';
import Tags from './Tags';
import Title from './Title';

export default function WorkExp({ exp, seq }) {
  return (
    <Container seq={seq}>
      <Horizontal>
        <Title level={2}>{exp.company}</Title>
        {exp.location && <p>{exp.location}</p>}
      </Horizontal>
      {exp.positions.map((pos, i) =>
        <div className="work-pos" key={i}>
          <Horizontal>
            <h3>{pos.title}</h3>
            <p>
              {pos.dates[0]} &ndash; {pos.dates[1]}
            </p>
          </Horizontal>
          { Array.isArray(pos.desc)
          ? <ul>{pos.desc.map((item, j) => <li key={j}>{item}</li>)}</ul>
          : <p>{pos.desc}</p> }
          <Tags tags={pos.tags} />
        </div>
      )}
    </Container>
  );
};
