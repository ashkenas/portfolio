import Container from "./Container";
import ExternalLink from "./ExternalLink";
import FlyIn from "./FlyIn";
import Hero from "./Hero";
import Tags from "./Tags";
import Title from "./Title";

export default function Projects() {
  return (
    <main>
      <Hero>
        <Title>
          <FlyIn text="Projects" />
        </Title>
      </Hero>
      <Container seq={1}>
        <Title level={2}>Project 1</Title>
        <Tags tags={['CSS', 'JS', 'React']} />
        <ExternalLink to="">Visit</ExternalLink>
        <p>
          I made a thing. It did what it needed to do. Pretty snazzy if I do say so myself.
        </p>
      </Container>
    </main>
  );
};
