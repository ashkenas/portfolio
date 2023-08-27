import Container from './Container';
import FlyIn from './FlyIn';
import Hero from './Hero';
import Subtitle from './Subtitle';
import Title from './Title';

export default function Home() {
  return (<>
    <Hero>
      <Title><FlyIn seq={0} text="Hi, I'm |Jacob|." /></Title>
      <Subtitle><FlyIn seq={1} text="Interested in what I do? Have a look around!" /></Subtitle>
    </Hero>
    <Container seq={1}>
      <Title level={2}>About Me</Title>
      <p>I am a person. I do things. Why are you looking through my commit history?</p>
    </Container>
    <Container seq={2}>
      <p>Projects &gt;</p>
    </Container>
    <Container seq={3}>
      <p>Work Experience &gt;</p>
    </Container>
  </>);
};
