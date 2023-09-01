import Container from "./Container";
import ExternalLink from "./ExternalLink";
import Horizontal from "./Horizontal";
import Tags from "./Tags";
import Title from "./Title";

export default function Project({ project, seq }) {
  return (
    <Container seq={seq}>
      {project.link
      ? <Horizontal>
          <a href={project.link}><Title level={2}>{project.title}</Title></a>
          <ExternalLink to={project.link}>Visit</ExternalLink>
        </Horizontal>
      : <Title level={2}>{project.title}</Title>
      }
      <Tags tags={project.tags} />
      <p>{project.desc}</p>
    </Container>
  );
};
