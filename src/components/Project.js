import Container from "./Container";
import ExternalLink from "./ExternalLink";
import Horizontal from "./Horizontal";
import Tags from "./Tags";
import Title from "./Title";

export default function Project({ project, seq }) {
  return (
    <Container seq={seq}>
      <Horizontal>
        <Title level={2}>{project.title}</Title>
        {project.link && <ExternalLink to={project.link}>Visit</ExternalLink>}
      </Horizontal>
      <Tags tags={project.tags} />
      <p>{project.desc}</p>
    </Container>
  );
};
